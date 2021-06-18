# GCH 2020/04/07


class Permutation:


    # constructeur
    
    def __init__(self, data):
        
        if union(data) == [1..len(data)]:
            self.data = data
        else:
            raise ValueError("%s n'est pas une permutation de [1..%s]" % (data,len(data)) )

    
    # taille
    
    def __len__(self):
        
        return len(self.data)


    # égalité (permissive)
    
    def __eq__(self, other):
        
        n = max(len(self), len(other))
        
        for i in [1..n]:
            if self(i) != other(i):
                return False
        
        return True


    # inégalité

    def __ne__(self, other):
    
        return not self == other


    # affichage

    def __repr__(self):
        
        if len(self) < 30:
            res = matrix( [ [1..len(self)], self.data ] ).__repr__()
        else:
            res = "Permutation de [1..%s]" % len(self)
        
        return res

    
    # évaluation (permissive)
    
    def __call__(self, i):
        
        if 1 <= i and i <= len(self):
            return self.data[i-1]
        else:
            return i


    # composition (permissive)

    def __mul__(self, other):
        
        n = max(len(self), len(other))
        
        return Permutation( [ self(other(i)) for i in [1..n] ] )
        
        
    # ordre (algo générique)

    def ordre(self):
    
        n = 1
        cur = copy(self)
        id = Permutation([])
        
        while cur != id:
            cur *= self
            n += 1
            
        return n


    # liste d'inversions
    
    def inversions(self):
        
        res = []

        for i in [1..len(self)]:
            for j in [i+1..len(self)]:
                if self(i) > self(j):
                    res.append( (i,j) )

        return res


    # signature
    
    def sg(self):
    
        return (-1)^len(self.inversions())

        
    # décomposition cyclique

    def decomposition(self):
        
        still = [1..len(self)]
        
        res = []
        
        while still != []:
        
            x = still.pop(0)
            cur = [x]
            
            y = self(x)
            
            while y != x:
                cur += [y]
                still.remove(y)
                y = self(y)
                
            if len(cur) > 1:
                res.append( Cycle(cur) )
                
        return res
            

        
class Cycle(Permutation):
  
  
    # constructeur
    
    def __init__(self, data):
        
        n = max(data)
        
        perm = []
        
        for i in [1..n]:
        
            if i in data:
                j = data[(data.index(i) + 1) % len(data)]
            else:
                j = i
                
            perm.append(j)
            
        Permutation.__init__(self, perm)
        self.cycle = data


    # affichage

    def __repr__(self):
        
        res = "("
        
        for i in self.cycle:
            
            if res != "(":
                res += ","
                
            res += str(i)
        res += ")"
        return res
        
    
print("-= Classe Permutation (PROF) chargée =-")

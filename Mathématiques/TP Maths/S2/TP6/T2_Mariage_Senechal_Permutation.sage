# Augustin Mariage & Pierre Sénéchal

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
    
    # comparaison
    
    def __eq__(self, other):
        
        return self.data == other.data
        
    def __ne__(self, other):
    
        return not self == other

    # affichage

    def __repr__(self):
        
      if len(self) < 30:
        res = matrix( [ [1..len(self)], self.data ] ).__repr__()
      else:
        res = "Permutation de [1..%s]" % len(self)
        
      return res
    
    # évaluation
    
    def __call__(self, i):
        
        if i in self.data:
            return self.data[i-1]
        else:
            return i

    # composition

    def __mul__(self, other):
    
        x = Permutation([])
        for i in range(1, len(other)+1):
            if(other(i) <= len(self)):
                x.data.append(self(other(i)))
            else :
                x.data.append(other(i))
        return x
        
    # ordre
        
    def ordre(self):

        x = 1
        Max=0
        for i in range (1, len(self)+1):
            succ = self(self(i))
            while(succ != self(i)):
                succ = self(succ)
                x +=1
            if x>Max:
                Max = x
            x = 1
        return Max
        
    # liste d'inversions
    
    def inversions(self):
      
        Inv = []
        for i in range (1, len(self)+1):
            for j in range (i, len(self)+1):
                if self(i) > self(j):
                    Inv.append((i,j))
        return Inv

    # signature
    
    def sg(self):
    
        return (-1)^len(self.inversions())
        
    # décomposition cyclique

    def decomposition(self):
        x=[]
        for i in range (1, len(self)+1):
            cycle = []
            succ = self(self(i))
            cycle.append(succ)
            while(succ != self(i)):
                succ = self(succ)
                cycle.append(succ)
            y = Cycle(cycle)
            if(not y in x):
                x.append(y)
        return x
 
    
print("-= Classe Permutation chargée =-")
print()s
print("N'oubliez pas de la recharger à chaque fois que vous la modifiez !")

class Cycle(Permutation):

        # Constructeur
    def __init__(self, cycle):

        self.cycle = cycle
        data = [1..max(cycle)]
        a = cycle[1:] + cycle[:1]

        for i in range (len(cycle)):
            data[cycle[i]-1] = a[i]

        Permutation.__init__(self,data)

    # affichage
    def __repr__(self):

        if len(self) < 30:
            res = matrix(self.cycle).__repr__()
        else:
            res = "Permutation de [1..%s]" % len(self)
        return res

print("-= Classe Cycle chargée =-")
print()
print("N'oubliez pas de la recharger à chaque fois que vous la modifiez !")
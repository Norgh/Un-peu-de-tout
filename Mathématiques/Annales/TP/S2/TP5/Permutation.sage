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
        tmp=Permutation([])
        for i in range(1,len(other)+1):
            if(other(i)<=len(self)):
                tmp.data.append(self(other(i)))
            else :
                tmp.data.append(other(i))
        return tmp



    # ordre

    def ordre(self):

        tmp=1
        cycleMax=0
        for i in range (1,len(self)+1):
            successeur=self(self(i))
            while(successeur!=self(i)):
                successeur=self(successeur)
                tmp+=1
            if tmp>cycleMax:
                cycleMax=tmp
            tmp=1
        return cycleMax

    # liste d'inversions

    def inversions(self):

        liInv=[]
        for i in range (1,len(self)+1):
            for j in range (i,len(self)+1):
                if self(i)>self(j):
                    liInv.append((i,j))
        return liInv


        raise NotImplementedError("La listes des inversions d'une permutation n'est pas (encore !) implémentée")

    # signature

    def sg(self):

        return (-1)^len(self.inversions())

    # décomposition cyclique

    def decomposition(self):

        tmp=[]
        for i in range (1,len(self)+1):
            cycle=[]
            successeur=self(self(i))
            cycle.append(successeur)
            while(successeur!=self(i)):
                successeur=self(successeur)
                cycle.append(successeur)
            cycleTmp=Cycle(cycle)
            if(not cycleTmp in tmp):
                tmp.append(cycleTmp)
        return tmp



        #return decom



print("-= Classe Permutation chargée =-")
print()
print("N'oubliez pas de la recharger à chaque fois que vous la modifiez !")

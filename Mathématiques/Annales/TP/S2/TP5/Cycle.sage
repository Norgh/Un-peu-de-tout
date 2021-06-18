class Cycle(Permutation):

    def __init__(self, cycle):

        self.cycle=cycle
        data=[1..max(cycle)]
        decal = cycle[1:]+cycle[:1]

        for i in range (len(cycle)):
            data[cycle[i]-1] = decal[i]

        Permutation.__init__(self,data)

    def __repr__(self):

        if len(self) < 30:
            res = matrix(self.cycle).__repr__()
        else:
            res = "Permutation de [1..%s]" % len(self)
        return res



print("-= Classe Cycle chargée =-")
print()
print("N'oubliez pas de la recharger à chaque fois que vous la modifiez !")

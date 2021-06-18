class Sandpile():

	def __init__(self, mat):

		self.mat = matrix(mat)
        
	def show(self):
		couleur = ['white','red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'purple', 'black']
		x = 0
		y = 0
		graph = point((0, 0), color='black')
		for i in range(self.mat.nrows() - 1, -1, -1):
			for j in range(self.mat.ncols()):
				graph += polygon([[x, y], [x+1, y], [x+1, y+1], [x, y+1]], color=couleur[self.mat[j][i] % 9])
				x += 1
			x = 0
			y += 1

		return graph

	def topple(self, i, j):
		if self.mat[i, j] < 4:
			print("Cette case est déjà stable")
			return


		self.mat[i, j] -= 4

		for k in range(i - 1, i + 2 ,2):
			if k < self.mat.ncols() and k >= 0:
				self.mat[k,j] += 1

		for l in range(j - 1, j + 2, 2):
			if l < self.mat.nrows() and l >= 0:
				self.mat[i,l] += 1

		return self.mat

	def is_stabilize(self):
		for i in range(self.mat.nrows()):
			for j in range(self.mat.ncols()):
				if self.mat[i, j] >= 4:
					return False
		return True

	def stabilize(self):
		if self.is_stabilize():
			print("Stable state reached after 0 topplings") 
			return
			
		compteur = 0
		while not self.is_stabilize():
			for i in range(self.mat.ncols()):
				for j in range(self.mat.nrows()):
					if self.mat[i, j] >= 4:
						self.topple(i, j)
						compteur += 1

		show("Stable state reached after ", compteur, " topplings")

		return self.mat

	def __add__(self, b):
		if self.mat.nrows() != b.mat.nrows():
			show("Les deux matrices n'ont pas la même taille")
			return

		temp = copy(self)

		for i in range(self.mat.nrows()):
			for j in range(self.mat.ncols()):
				temp.mat[i, j] += b.mat[i, j]

		temp.stabilize()
		return temp.mat

	def findNeutral(self):
		n = self.mat.ncols()
		sMax = Sandpile( n*[ n*[3] ] )
		dsMax=sMax+sMax
		temp=Sandpile( n*[ n*[0] ] )
		for i in range(n):
			for j in range(n):
				temp.mat[i,j]=(3-dsMax[i,j])
		sMax = Sandpile(n * [n * [3]])
		sMax + temp
		return sMax

	def __eq__(self, other):
		if self.mat == other:
			return True
		else:
			return False

	def __repr__(self):

		return self.mat.__repr__()

print("-= Classe Sandpile chargée =-")
print()
print("N'oubliez pas de la recharger à chaque fois que vous la modifiez !")

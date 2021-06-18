import matplotlib.pyplot as plt

class Sandpile():

  def __init__(self, mat):

    self.mat = matrix(mat)
    self.n = self.mat.nrows() #Q2

  def __repr__(self):

    return self.mat.__repr__()

  def __eq__(self, other):

    return self.mat == other.mat

  def show(self):
    return matrix_plot(self.mat, cmap=plt.get_cmap("rainbow"), colorbar=true)

  def topple(self, i, j):
  
    if self.mat[i,j] >= 4:
      self.mat[i,j] -=4
      for (x,y) in [ (i-1,j), (i+1,j), (i,j-1), (i,j+1)]:
        if x >= 0 and x < self.n and y >= 0 and y < self.n:
          self.mat[x,y] += 1
    return self.mat
    
  def is_stabilized(self):
    for i in range(self.mat.nrows()):
      for j in range(self.mat.ncols()):
        if self.mat[i, j] >= 4:
          return False
    return True
        
  def stabilize(self):
    if self.is_stabilized():
      print("Stable state already reached, 0 toppling done") 
      return

    count = 0
    while not self.is_stabilized():
      for i in range(self.mat.ncols()):
        for j in range(self.mat.nrows()):
          if self.mat[i, j] >= 4:
            self.topple(i, j)
            count += 1

    print("Stable state reached after ", count, " topplings")

    return self.mat

  def __add__(self, b):
    if self.mat.nrows() != b.mat.nrows():
      show("Not same size")
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
        
print("-= Classe Sandpile chargée =-")
print()
print("N'oubliez pas de la recharger à chaque fois que vous la modifiez !")

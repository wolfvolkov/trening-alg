unsortArr = [20,4,12,17,15,16,10,0,9,22,32,0,12,7,6,45,7,0,11,21,19,18,4,1,2,4,12,8,9,0,5,6,3,6,5,4,14,16,30,4,36,1,4]

qSort = (unArr) -> 
	unArr = unArr.slice()
	ArrL = unArr.length
	return [] if ArrL == 0
	point = unArr[0][0]
	lArr = []
	rArr = []
	fp = unArr[0][1]

	
	conole.log for i in ArrL
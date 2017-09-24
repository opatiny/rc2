attach(vMaxPosition)

pch <- 19
cex <- 0.25


plot(theta, r10, ylab="alpha [degree]", xlab="theta [degree]", pch = pch, cex = cex, xlim=c(0,360), ylim=c(0,180))
points(r20, pch = pch, col = 2, cex = cex)
points(r30, pch = pch, col = 3, cex = cex)
points(r40, pch = pch, col = 4, cex = cex)
points(r50, pch = pch, col = 5, cex = cex)
points(r60, pch = pch, col = 6, cex = cex)
points(r70, pch = pch, col = 7, cex = cex)
points(r80, pch = pch, col = "darkorange1", cex = cex)
points(r90, pch = pch, col = "gray48", cex = cex)
points(r100, pch = pch, col = "forestgreen", cex = cex)


grid(nx = NULL, ny = NULL, col = "lightgray", lty = 1)
legend("topleft", c("r = 10", "r = 20","r = 30", "r = 40", "r = 50", "r = 60", "r = 70", "r = 80", "r = 90", "r = 100"), pch = pch, col = c(1,2,3,4,5,6,7,"darkorange1","gray48","forestgreen"), title = "Legend")

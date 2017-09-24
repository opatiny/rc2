attach(vMaxSpeed)

pch <- 19
cex <- 0.25


plot(vMaxSpeed$theta, r10, ylab="alpha [degree]", xlab="theta [degree]", pch = pch, cex = cex, xlim=c(180,360), ylim=c(0,140))

points(r80, pch = pch, col = "darkorange1", cex = cex)
points(r90, pch = pch, col = "gray48", cex = cex)
points(r95, pch = pch, col = "greenyellow", cex = cex)
points(r99, pch = pch, col = "lightblue3", cex = cex)
points(r100, pch = pch, col = "forestgreen", cex = cex)


grid(nx = NULL, ny = NULL, col = "lightgray", lty = 1)
legend("topleft", c("r = 10", "r = 80","r = 90", "r = 95", "r = 99", "r = 100"), pch = pch, col = c(1,"darkorange1","gray48","greenyellow","lightblue3","forestgreen"), title = "Legend")

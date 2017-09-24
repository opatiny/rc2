attach(proto2)

pch <- 19
cex <- 0.35


plot(theta, alpha1, ylab="alpha [degree]", xlab="theta [degree]", pch = pch, cex = cex, xlim=c(0,360), ylim=c(0,180), col = 4)
points(alpha2, pch = pch, col = 2, cex = cex)
points(alpha3, pch = pch, col = 3, cex = cex)

grid(nx = NULL, ny = NULL, col = "lightgray", lty = 1)
legend("topright", c("alpha1", "alpha2","alpha3"), pch = pch, col = c(4,2,3), title = "Legend")

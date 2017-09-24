library(scales)
attach(proto3)

pch <- 19
cex <- 0.35


plot(theta, alpha1, ylab="alpha [degree]", xlab="theta [degree]", pch = pch, cex = cex, xlim=c(0,360), ylim=c(0,180), col = alpha(4, 0.4))
points(alpha2, pch = pch, col = alpha(2, 0.4), cex = cex)
points(alpha3, pch = pch, col = alpha(3, 0.4), cex = cex)
points(formulaAlpha1, pch = pch, col = 4, cex = cex)
points(formulaAlpha2, pch = pch, col = 2, cex = cex)
points(formulaAlpha3, pch = pch, col = 3, cex = cex)

grid(nx = NULL, ny = NULL, col = "lightgray", lty = 1)
legend("topright", c("Corrected alpha1", "Corrected alpha2","Corrected alpha3", "Formula alpha1", "Formula alpha2", "Formula alpha3"), cex = 0.9, pch = pch, col = c(alpha(4, 0.4),alpha(2, 0.4),alpha(3, 0.4),4,2,3), title = "Legend")

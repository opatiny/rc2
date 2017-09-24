attach(servoAxisTest)

pch <- 19
cex <- 0.25


plot(theta, r11, ylab="alpha [degree]", xlab="theta [degree]", pch = pch, cex = cex, xlim=c(0,360), ylim=c(0,180))
points(r11.2, pch = pch, col = 2, cex = cex)
points(r11.4, pch = pch, col = 3, cex = cex)
points(r11.6, pch = pch, col = 4, cex = cex)
points(r11.8, pch = pch, col = 5, cex = cex)
points(r12, pch = pch, col = 6, cex = cex)


grid(nx = NULL, ny = NULL, col = "lightgray", lty = 1)
legend("topright", c("s = 11", "s = 11.2","s = 11.4", "s = 11.6", "s = 11.8", "s = 12"), pch = pch, col = c(1,2,3,4,5,6), title = "Legend")

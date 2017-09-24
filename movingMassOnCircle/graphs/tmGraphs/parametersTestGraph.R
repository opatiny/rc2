attach(parametersTest)

pch <- 19
cex <- 0.35


plot(parametersTest$theta, parametersTest$r1.d1, ylab="alpha [degree]", xlab="theta [degree]", pch = pch, cex = cex, xaxp = c(0, 360, 6), yaxp = c(0, 180, 6))
points(r2.3, pch = pch, col = 2, cex = cex)
points(r1.3, pch = pch, col = 3, cex = cex)
points(d3.2, pch = pch, col = 4, cex = cex)
points(d2, pch = pch, col = 5, cex = cex)


grid(nx = 5, ny = NULL, col = "lightgray", lty = 1)
legend("topright", c("s = r, d = R", "s = 2/3r, d = R","s = 1/3r, d = R", "s = r, d = 3/2R", "s = r, d = 2R"), pch = pch, col = c(1,2,3,4,5), title = "Legend")

This sentence uses `$` delimiters to show math inline:  $\sqrt{3x-1}+(1+x)^2$

Gradient of a straight line
The gradient of the straight line through the points $(x_1, y_1)$ and $(x_2, y_2)$, where $x_1 \neq x_2$ is given by
$$gradient = \frac{rise}{run} = \frac{y_2 - y_1}{x_2 - x_1}.$$

The gradient of a graph at a particular point is the gradient of the tangent to the graph  at that point.

Differentiation from the first principles
For any function $f$, the derivative $f'$ of $f$ is given by the equation
$$f'(x) = \lim_{h\to0}\frac{f(x+h) - f(x)}{h}$$
for each value of $x$ in the domain of $f$ for which this limit exists.

Derivative of a power function
For any number $n$,
$$\frac{d}{dx}(x^n)=nx^{n-1}.$$

Constant multiple rule (Lagrange notation)
If the function $k$ is given by $k(x) = af(x)$, where $f$ is a function and $a$ is a constant, then
$$k'(x)  = af'(x),$$
for all values of $x$ at which $f $ is differentiable.

Constant multiple rule (Leibniz notation)
If $y = au$, where $u$ is a function of $x$ and $a$ is a constant, then
$$\frac{dy}{dx}=a\frac{du}{dx},$$
for all values of $x$ at which $u$ is differentiable. 

A proof of the constant multiple rule
Suppose that $f$ is a function and $a$ is a constant. Consider the function $k$ given by $k(x)=af(x)$. Let $x$ be any value at which $f$ is differentiable. To find $k'(x)$, you have to consider what happens  to the difference quotient for $k$ at $x$, which is
$$\frac{k(x+h) - k(x)}{h}$$
(where $h$ can be positive or negative but not zero), as $h$ gets closer and closer to zero. Since $k(x)=af(x)$, the difference quotient for $k$ at $x$ is equal to 
$$\frac{af(x+h)-af(x)}{h},$$
which is equal to
$$a\left(\frac{f(x+h)-f(x)}{h}\right).$$
The expression in the large brackets is the difference quotient for $f$ at $x$, so as $h$ gets closer and closer to zero, it gets closer and closer to $f'(x)$. Hence the whole expression gets closer and closer to $af'(x)$. In other words,
$$k'(x) = af'(x),$$
which is the constant multiple rule.

Derivative of a constant function
If $a$ is a constant, then
$$\frac{d}{dx}(a)=0.$$

Sum rule (Lagrange notation)
If $k(x) = f(x) + g(x)$, where $f$ and $g$ are functions, then
$$k'(x) = f'(x) + g'(x),$$
for all values of $x$ at which both $f$ and $g$ are differentiable.

Sum rule (Leibniz notation)
If $y = u + v$, where $u$ and $v$ are functions of $x$, then
$$\frac{dy}{dx}= \frac{du}{dx} + \frac{dv}{dx},$$
for all values of $x$ at which both $u$ and $v$ are differentiable.

A proof of the sum rule
Suppose that $f$ and $g$ are functions, and that the function $k$ is given by $k(x) = f(x) + g(x)$. Let $x$ denote any value at which both $f$ and $g$ are differentiable. To find $k'(x)$, you have to consider what happens to the difference quotient for $k$ and $x$, which is
$$\frac{k(x+h) - k(x)}{h}$$
(where $h$ can be either positive or negative, but not zero), as $h$ gets closer and closer to zero. Since $k(x) = f(x) + g(x)$, this expression is euqal to 
$$\frac{(f(x+h) + g(x+h)) - (f(x) + g(x))}{h},$$
that is,
$$\frac{f(x+h) + g(x+h) - f(x) - g(x)}{h},$$
which is equal to
$$\left (\frac{f(x+h)-f(x)}{h}\right) + \left(\frac{g(x+h) - g(x)}{h}\right).$$
The expression in the first pair of large brackets is the difference quotient for $f$ at $x$, and the expression in the second pair of large brackets is the difference quotient for $g$ at $x$. So as $h$ gets closers and closer to zero, the values of these two expressions get closer and closer to $f'(x)$ and $g'(x)$, respectively. Hence the whole expression gets closer and closer to $f'(x) + g'(x)$. So
$$k'(x) = f'(x) + g'(x),$$
which is the sum rule.

A point at which the gradient of the graph is zero is called a stationary point.
local minimum
local maximum
A point where a function has a local maximum or local minimum is called a turning point.
A point where a graph changes from concave up to concave down or vice versa is called a point of inflection.
If the gradient of a graph at a point of inflection is zero, then the point is a horizontal point of inflection. Otherwise the point is a slant point of inflection.

Increasing/decreasing criterion
If $f'(x)$ is positive for all $x$ in an interval $I$, then $f$ is increasing on $I$.
If $f'(x)$ is negative for all $x$ in an interval $I$, then $f$ is decreasing on $I$.

Concave up/concave down criterion
If $f''(x)$ is positive for all $x$ in an interval $I$, then $f$ is concave up on $I$.
if $f''(x)$ is negative for all $x$ in an interval $I$, then $f$ is concave down on $I$.

Second derivative test (for determining the nature of a stationary point)
If, at a stationary point of a function, the value of the second derivative of the function is:
negative, then the stationary point is a local maximum;
positive, then the stationary point is a local minimum.

Product rule (Lagrange notation)
If $k(x) = f(x)g(x)$, then
$$k'(x) = f(x)g'(x) + g(x)f'(x),$$
for all values of $x$ at which both $f$ and $g$ are differentiable.

Product rule (Leibniz notation)
If $y = uv$, where $u$ and $v$ are functions of $x$, then
$$\frac{dy}{dx} = u\frac{dv}{dx} + v\frac{du}{dx},$$
for all values of $x$ at which both $u$ and $v$ are differentiable.

Quotient rule (Lagrange notation)
If $k(x) = f(x)/g(x)$, then
$$k'(x) = \frac{g(x)f'(x) - f(x)g'(x)}{(g(x))^2},$$
for all values of $x$ at which both $f$ and $g$ are differentiable and $g(x) \neq 0\).

Quotient rule (Leibniz notation)
If $y=u/v$, where $u$ and $v$ are functions of $x$, then
$$\frac{dy}{dx}=\frac{v\frac{du}{dx} - u\frac{dv}{dx}}{v^2},$$
for all values of $x$ at which both $u$ and $v$ are differentiable and $v \neq 0$.

Chain rule (Leibniz notation)
If $y$ is a function of $u$, where $u$ is a function of $x$, then
$$\frac{dy}{dx} = \frac{dy}{du}\frac{du}{dx},$$
for all values of $x$ where $y$ as a function of $u$, and $u$ as a function of $x$, are differentiable.

Chain rule (Lagrange notation)
If $k(x) = g(f(x))$, where $f$ and $g$ are functions, then
$$k'(x) = g'(f(x))f'(x)$$
for all values of $x$ such that $f$ is differentiable at $x$ and $g$ is differentiable at $f(x)$.

Derivative of a function of the form $k(x) = f(ax + b)$
If $k(x) = f(ax + b)$, where a is a non-zero constant, then
$$k'(x) = af'(ax + b),$$
for all values of $x$ such that $f$ is differentiable at $ax + b$.

Inverse function rule (Leibniz notation)
If $y$ is an invertible function of $x$, then
$$\frac{dy}{dx} = \frac{1}{\frac{dx}{dy}},$$
for all values of $x$ such that $\frac{dx}{dy}$ exists and is non-zero.

Inverse function rule (Lagrange notation)
If $f$ is a function with inverse function $f^{-1}$, then
$$(f^{-1})'(x)=\frac{1}{f'(f^{-1}(x))},$$
for all values of $x$ such that $f'(f^{-1}(x))$ exists and is non-zero.

Standard derivatives
|Functions|derivatives|
|--------:|-----------|
|$a (constant)$|$0$|
|$x^n$|$nx^{n-1}$|
|$e^x$|$e^x$|
|$\ln x$|$1/x$|
|$\sin x$|$\cos x$|
|$\cos x$|$-\sin x$|
|||
|$\tan x$|$\sec^2 x$|
|$\csc x$|$-\csc x\cot x$|
|$\sec x$|$\sec x \tan x$|
|$\cot x$|$-\csc^2 x$|
|||
|$\sin^{-1} x$|$\frac{1}{\sqrt{1-x^2}}$|
|$\cos^{-1} x$|$-\frac{1}{\sqrt{1-x^2}}$|
|$\tan^{-1} x$|$\frac{1}{1 + x^2}$|


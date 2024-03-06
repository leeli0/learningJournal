## signed-area-so-far function
## Fundamental theorem of calculus (in words)
Suppose that $f$ is a continuous function whose domain contains the numbers $a$ and $b$, and that $F$
is an antiderivative of $f$. Then the signed area between the graph of $f$ and the $x$-axis from $x=a$
to $x=b$ is equal to the change in the value of $F$ as $x$ changes from $x=a$ to $x=b$.

## Fundamental theorem of calculus
Suppose that $f$ is a continous function whose domain contains the numbers $a$ and $b$, and that $F$
is an antiderivative of $f$. Then
$$\int_{a}^{b}f(x) \, dx=[F(x)]_{a}^{b}$$.

## Constant multiple rule and sum rule for the square bracket notation
$[kF(x)]\_a^b=k[F(x)]\_a^b$, where $k$ is a constant

$[F(x)+G(x)]\_{a}^{b}=[F(x)]\_{a}^{b}+[G(x)]\_{a}^{b}$

## Constant multiple rule and sum rule for definite integrals
$$\int\_a^b kf(x) \ dx=k\int\_a^b f(x) \ dx$$, where $k$ is a constant

$$\int\_a^b (f(x)+g(x)) \ dx=\int\_a^b f(x) \ dx + \int\_a^b g(x) \ dx$$

## Constant multiple rule and sum rule for indefinite integrals
$$\int kf(x) dx=k\int f(x) dx$$, where $k$ is a constant

$$\int(f(x)+g(x)) dx=\int f(x) dx+\int g(x) dx$$

## Integration by substitution
1. Recognise that the integrand is of the form
   $f(something)\times the derivative of the something$,
   where $f$ is a function that you can integrate.
2. Set the something equal to $u$, and find $du/dx$.
3. Hence write the integral in the form
   $$\int f(u)du$$,
   by using the fact that $$\int f(u)\frac{du}{dx} dx=\int f(u) du$$
4. Do the integration.
5. Substitute back for $u$ in terms of $x$.

## Indefinite integral of a function of a linear expression
If $f$ is a function with antiderivative $F$, and $a$ and $b$ are constants with $a\neq0$, then
$$\int f(ax+b) dx=\frac{1}{a}F(ax+b)+c$$

## Integration by parts
Suppose that $f$ and $g$ are functions, and that function $G$ is an antiderivative of the
function $g$. Consider the equation that you obtain when you use the product rule to differentiate the product $f(x)G(x)$:
$$\frac{d}{dx}(f(x)G(x))=f(x)(\frac{d}{dx}G(x))+G(x)(\frac{d}{dx}f(x))$$
that is,
$$\frac{d}{dx}(f(x)G(x))=f(x)g(x)+G(x)f'(x)$$

If you swap the order of $G(x)$ and $f'(x)$ in the final term, and subtract this term from both
sides of the equation, then you obtain
$$\frac{d}{dx}(f(x)G(x))-f'(x)G(x)=f(x)g(x)$$

Swapping the sides of this equation gives
$$f(x)g(x)=\frac{d}{dx}(f(x)G(x))-f'(x)G(x)$$

If you now integrate both sides of this equation with respect to $x$, then you obtain
$$\int f(x)g(x) dx=f(x)G(x)-\int f'(x)G(x) dx$$

## Integration by parts formula (Lagrange notation)
$$\int f(x)g(x) dx=f(x)G(x)-\int f'(x)G(x) dx$$
Here $G$ is an antiderivative of $g$.
$$\int f(x)g'(x) dx=f(x)g(x)-\int f'(x)g(x) dx$$

## Integration by parts formula (Leibniz notation)
$$\int u\frac{dv}{dx} dx=uv-\int v\frac{du}{dx} dx$$

## Integration by parts formula for definite integrals
$$\int f(x)g(x) dx=[f(x)G(x)]\_a^b-\int\_a^b f'(x)G(x) dx$$
Here $G$ is an antiderivative of $g$.



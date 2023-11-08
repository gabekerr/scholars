var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "colophon-1",
  "level": "1",
  "url": "colophon-1.html",
  "type": "Colophon",
  "number": "",
  "title": "Colophon",
  "body": "   math.ksu.edu\/~gdkerr   https:\/\/math.ksu.edu\/~gdkerr\/   copyright  "
},
{
  "id": "sec-arithmetic",
  "level": "1",
  "url": "sec-arithmetic.html",
  "type": "Section",
  "number": "1.1",
  "title": "Arithmetic Review",
  "body": " Arithmetic Review  We start with a review of arithmetic. As the student progresses beyond the first year of calculus, they will find that complex numbers begin to appear with striking regularity, often to dramatically simplify various problems. So, we want to have some familiarity with them. Furthermore, a review of arithmetic gives us a chance to remember some mathematical vocabulary we learned in elementary school, but have surely forgotten.  First, we should remember the notation for different sets of numbers:            At this point it is worth clarifying that this is not an analysis course, so we are not going to honestly answer the question of what a real number is - i.e. we are not going to give the abstract definition of real numbers. However, we are happy to understand the computational side of these numbers as numbers with potentially infinite decimal expansions. Of course, we also know these numbers as points on the real line (the geometric viewpoint).  By the way, did you notice the notation in the definition of the rationals? Let's take another look at it This notation denotes a set of elements (written before the colon) which satisfy some conditions (listed after the colon). So written out it says that is the set of expressions where and are integers and is not zero . Sometimes the colon : will be replaced with a vertical line , but the meaning is the same. As this is a standard way of writing sets, let's record the format again as   Back to numbers now! In all of the familiar examples above, we have ways of combining our numbers through addition and multiplication. Early on, we become accustomed to using some fundamental properties which we list here:   Identities The elements and are identities for addition and multiplication respectively     Commutativity If we combine two numbers and , we can combine with or with and we will get the same result     Associativity If we are to combine numbers , it does not matter which two we combine first     Distributive Property Multiplying the sum by is the same as summing the products and      We will not be overly concerned with these properties (as you will be when you take a modern algebra course!). However, some do end up breaking down with a few of the new operations that we will define, so it's worth being aware of their names and meaning.     comlex number    A complex number is a number of the form where and are real numbers and satisfies the equation . The number is called the real part of and the imaginary part. Addition of two complex numbers is accomplished by adding their real and imaginary parts respectively Multiplication of two complex numbers is accomplished using the distributive and commutative properties (sometimes called foiling).     The set of complex numbers is denoted and now that we have an abstract and computational definition of them, we should take a look at their geometry. We note that a complex number can be made into a point in the Cartesian plane . By taking this identification seriously, we sometimes call the complex plane and use this to motivate the conjugate and norm:   Conjugate The conjugate of is the reflection of over the -axis,    Norm The norm of is its distance to the origin     As it turns out, viewing complex numbers as points on the plane makes more and more sense as you consider their arithmetic. For example, we can think of addition of a given number as an operation on the entire plane at once (in particular as a function) as follows If you've never seen before, it means we are defining the left hand side by the right hand side. So we think of addition by as a function on all of . What does it do? Well a little sketching shows that it translates the plane exactly by a vector connecting to . More on this later!  If addition can be thought of as translation, then what about multiplication? We know from elementary school that multiplication by a positive real number will scale another number and that still holds when you multiply all complex numbers by a positive real number.  But to understand multiplication by a complex number, it is very helpful to remember a little calculus. Recall Taylor's Theorem tells us that   If you were very excited about this theorem (and you should have been!), then you may have also computed a few other series, like Of course, these equations involve functions of a real number . Nevertheless, for these functions this restriction turns out not to be necessary and in fact all of these equations hold for a complex number (by which we mean they are convergent power series with radius of convergence . This will be worked out and proven in a complex analysis course). In particular, if we take the purely imaginary number where is any real number, we obtain Euler's formula   Upon seeing this, you may say So what's the big deal? After all, this is some equation that relates a tremendously confusing expression to a newly introduced set of complex numbers. Let's take a closer look though to see the power contained in this equation. For a fixed , the right hand side is just a complex number, which we've identified with the point on the plane. That type of point should look familiar to you because it lies on the unit circle making an angle of with the positive -axis. Moreover, all points on the unit circle are of this form. So our first observation is that the unit circle is the set of points hit by exponentiating a purely imaginary number... which is pretty cool.  However, you'll recall that we started this memory tour of calculus by trying to understand multiplication of complex numbers. We noted above that multiplying by a positive real number just scales a complex number. But any point on the plane is a scaled version of a unique point on the unit circle (except zero, where you lose uniqueness). So every complex number can be written in the form for some real number and non-negative real number . Again, when , and , this expression is unique.  Well, what happens if we multiply two of them and ? You can answer this question easily if you are assured of the fact that the usual rules do indeed apply (and I assure you that they do). You will compute seeing that the scales multiply and the angles add. If so is on the unit circle, you see that multiplication just rotates by counter-clockwise around the origin. So complex multiplication encodes scaling and rotation!  While there are many more points to make about the geometry of complex numbers, we will put these on hold and return to the abstract and computational picture. It may be surprising that the complex numbers satisfy all of the familiar arithmetic properties we mentioned earlier, but in fact they satisfy an even more amazing property which is at the root (pun intended) of their importance.   Fundamental Theorem of Algebra  Gauss   If is a non-constant polynomial with complex coefficients then there is a complex solution to the equation     Notice that this is not the case for the real numbers. For example, the equation does not have a real solution.  The proof of this theorem is beyond the scope of this course, and we should note that it is not in any way a constructive theorem. By this I mean that, while the theorem asserts the existence of a solution, in general finding an exact solution is impossible (although when it is possible). Even so, the result can be used to understand the behavior of many different systems as we will see when we get to diagonalization techniques.   Specify a number system and operation satsifying the properties:  The operation is commutative but not associative.   The operation is not commutative.   Let and .  Compute .   Compute .   Express and in the form (i.e. in each case identify and ).   Compute . For both the grader and your sake, please do it cleverly.    Find the complex number that, when multiplying by this number, rotates the plane counter-clockwise by degrees.    Prove that .    Prove that .   Use Euler's Formula to prove the trigonometric addition formulas:   ,    .    "
},
{
  "id": "def-complexnum",
  "level": "2",
  "url": "sec-arithmetic.html#def-complexnum",
  "type": "Definition",
  "number": "1.1.1",
  "title": "",
  "body": "   comlex number    A complex number is a number of the form where and are real numbers and satisfies the equation . The number is called the real part of and the imaginary part. Addition of two complex numbers is accomplished by adding their real and imaginary parts respectively Multiplication of two complex numbers is accomplished using the distributive and commutative properties (sometimes called foiling).    "
},
{
  "id": "thm-fta",
  "level": "2",
  "url": "sec-arithmetic.html#thm-fta",
  "type": "Theorem",
  "number": "1.1.2",
  "title": "Fundamental Theorem of Algebra.",
  "body": " Fundamental Theorem of Algebra  Gauss   If is a non-constant polynomial with complex coefficients then there is a complex solution to the equation    "
},
{
  "id": "exercise-1",
  "level": "2",
  "url": "sec-arithmetic.html#exercise-1",
  "type": "Exercise",
  "number": "1.1.1",
  "title": "",
  "body": "Specify a number system and operation satsifying the properties:  The operation is commutative but not associative.   The operation is not commutative.  "
},
{
  "id": "exercise-2",
  "level": "2",
  "url": "sec-arithmetic.html#exercise-2",
  "type": "Exercise",
  "number": "1.1.2",
  "title": "",
  "body": "Let and .  Compute .   Compute .   Express and in the form (i.e. in each case identify and ).   Compute . For both the grader and your sake, please do it cleverly.  "
},
{
  "id": "exercise-3",
  "level": "2",
  "url": "sec-arithmetic.html#exercise-3",
  "type": "Exercise",
  "number": "1.1.3",
  "title": "",
  "body": " Find the complex number that, when multiplying by this number, rotates the plane counter-clockwise by degrees.  "
},
{
  "id": "exercise-4",
  "level": "2",
  "url": "sec-arithmetic.html#exercise-4",
  "type": "Exercise",
  "number": "1.1.4",
  "title": "",
  "body": " Prove that .  "
},
{
  "id": "exercise-5",
  "level": "2",
  "url": "sec-arithmetic.html#exercise-5",
  "type": "Exercise",
  "number": "1.1.5",
  "title": "",
  "body": " Prove that .  "
},
{
  "id": "exercise-6",
  "level": "2",
  "url": "sec-arithmetic.html#exercise-6",
  "type": "Exercise",
  "number": "1.1.6",
  "title": "",
  "body": "Use Euler's Formula to prove the trigonometric addition formulas:   ,    .  "
},
{
  "id": "sec-setsandfunctions",
  "level": "1",
  "url": "sec-setsandfunctions.html",
  "type": "Section",
  "number": "1.2",
  "title": "Sets and Functions Review",
  "body": " Sets and Functions Review  The concept of a function is truly the megastar of much of mathematics. A function gives two separate structures (e.g. sets, spaces, etc.) permission to talk to each other and relate their properties. So it is of great importance that we are comfortable with some basic vocabulary concerning functions. In order to become so, we also require knowledge of some basic set theory notation.     elements in a set    A set is a collection of elements. We write to denote that the element is in the set . A set is a subset of , written , if all elements in are also in .     Natural numbers as a set   The set of natural numbers is one of the first sets we learn to work with. Examples of subsets include the even numbers , the numbers between and  and the empty set which, as its name suggests, is the set with no elements. To denote that these are subsets, one would write or . Of course, negative integers are not natural numbers, so the integers do not form a subset of the naturals. We can denote this fact by .    Useful operations on subsets are intersection and union.     intersections and unions of subsets    Given subsets their intersection is while their union is     Given a pair of sets, we may produce many other sets even if they do not live in the same larger set. A standard construction that we will often encounter is the product of two sets and .     Cartesian product of sets    The product set of and is the set of ordered pairs . For a positive integer , we denote by the -fold product of with itself consisting of -tuples .    This definition, while coming to us from the abstract viewpoint, gives us our first glimpse of one of the central objects of calculus. As such, we obtain a computational and geometric structure.   Product sets   We write and for -dimensional real (or Euclidean) and complex space. The points of are -tuples of real numbers (although in some contexts, we will write them as columns instead of rows). The cases of the real line and the Cartesian plane or most likely very familiar to you by now. Three dimensional space can also be given Cartesian coordinates by considering Here we take to be a height coordinate and place the Cartesian plane flat at height zero . We do this so that, looking downward at the plane, the positive -axis moves counter-clockwise towards the positive -axis. This method of orienting three space is called the Right-hand rule .    Now let us bring in our megastar, the function, by defining it abstractly.     function from to    A function  from the set to the set is a subset of which satisfies the property :  Given any element in , there exists a unique pair in .  The element from the pair is written and we think of as assigning to .    The notation for this setup is and the vocabulary around this is   is called the graph of ,   is called the domain of ,   is called the codomain of ,  the set of elements in that can be written in the form for some in is called the range or image of .    An astute student may object and note that is defined to be  , so why would we call the graph of the function and not just the function itself? The answer may not satisfy, but in fact a function is often thought of as an assignment, rather than a graph (even though it technically is a graph), so we differentiate the language in order to express the different perspectives. Indeed, the definition given here is an abstract definition but it ties in directly to the computational side through formulas and the geometric perspective by considering the graph.   Functions of one real variable   A calculus student spends nearly all of their time thinking about functions where is some interval in . Note that, for these functions, the property in is precisely the vertical line test for a function.  In a calculus course, the notation above is rare and functions are often written computationally in terms of a formula or referred to as as in: This last statement is actually talking about the abstract definition of a function, namely, its graph: Note that we did not define the domain of here, and it could indeed be any subset of and the most general set would be itself. We did define the codomain of as in , but, if we take the domain to be , we can compute the range to be . We see that the codomain and range of a function may indeed be distinct.    The difference between the codomain and range seen in leads to a few special definitions which will arise repeatedly throughout this course.     onto, one-to-one functions and one-to-one correspondence    Let be a function.  We say that is one-to-one (or 1-1) if the equality implies that .  We say that is onto if is the range of .  We say that is a one-to-one correspondence if it is both one-to-one and onto.  The element from the pair is written and we think of as assigning to .    One should think of one-to-one functions as including one set into another and onto functions as covering one set by another. A one-to-one correspondence should be thought of as an exact element to element matching from the domain to the codomain.   One-to-one and onto functions   As it turns out, functions can satisfy none, some or all of the properties in . Indeed, consider the following list of functions:     In the previous section, we reviewed ways of combining numbers and it is the case the functions can be combined as well using composition. However, for two functions and to admit a composition , we must have that the codomain of is the domain of (or at least contained in the domain).     composition of functions    Given functions and the composite function is defined by the formula     It is the case that composition is associative, but commutativity is sometimes not even a sensible property, and when it is, it often fails to hold. Another property that we will often want (and rarely have) is the existence of an inverse function. To explain this concept, we need the notation of the identity function which by definition gives for all elements of . It is not hard to see that given any the identity functions act as identities with respect to composition .  An inverse function of is a function (or ) which satisfies the equations The following is a useful and basic result.    A function has an inverse function if and only if it is a one-to-one correspondence. In this case, its inverse is unique.    We need to show both that a one-to-one correspondence has an inverse and that a function with an inverse is a one-to-one correspondence. Let's start with the latter and assume has an inverse . To see that is one-to-one, suppose . Then showing that is one-to-one. To see that is onto, simply observe that for any , we have that so that is in the range of and is onto.  Now for the converse. Suppose is a one-to-one correspondence and let be any element of . Then, since is onto, there is some in with . We define . To see that this makes sense, we need to verify (*) in and show that is unique. But if for some other in , then is not one-to-one, so must be unique implying is a function. It is clear that so that and so that . Thus is an inverse function to .  For the last statement about the uniqueness of the function , one considers what would happen if were another inverse. Then for any in , But this means that as a function and is the unique inverse.     A function and its inverse   Consider the function as a function from to . We note that and that its derivative is . So it is an increasing function which implies it is one-to-one (the conclusion made is true, but the argument has a flaw... why?). Encouraged by this, we can compute an inverse to . Since we have So that . Thus gives an inverse.    The types of functions one often begins to explore after the first year of calculus are so called vector valued functions > which are usually thought of as functions where . These functions can be, and often are, written in coordinates as   Vector valued functions where either or occupy a large part of our attention and have special names. If both and we are in the setting of one variable calculus. When just , but is potentially larger, we call the function a path and its image (or range) a curve . As we will see, such functions are the focal point of ordinary differential equations. An example that one will have seen before is the parametrization of the unit circle   On the other hand, when and is potentially larger, we call a scalar function. Scalar functions are ubiquitous in mathematics and applications. Indeed, any system that is producing a single value which relies on several variables contains a scalar function. For example, the total energy of a particle of mass in a gravitational field will depend on that particles height and its momentum so that Thus is a scalar valued function. In fact, much of classical mechanics is guided by these types of functions.    Explain the claim in that the property is the same as the vertical line test. Likewise, explain why one of these functions is one-to-one if and only if it survives the horizontal line test.    Let and both be considered as functions from to . Show that commutativity fails for their composition.    What is the flaw in the argument in .   A function has a left inverse if holds for some and a right inverse if equation holds for some .  Prove that has a left inverse if and only if it is one-to-one.   Prove that has a right inverse if and only if it is onto.    Inverse trigonometric functions are often used in a second semester calculus course. They are, however, frequently misunderstood because of their dependence on the subdomain of the original function. The standard range for is . Give an alternative definition of as an inverse to by specifying another domain where is one-to-one. What is the domain of your new ?   Write a formula for a function satisfying the following description:  A path parametrizing the -axis of three dimensional space .   A scalar valued function describing the distance from a point to the -axis.    "
},
{
  "id": "def-set",
  "level": "2",
  "url": "sec-setsandfunctions.html#def-set",
  "type": "Definition",
  "number": "1.2.1",
  "title": "",
  "body": "   elements in a set    A set is a collection of elements. We write to denote that the element is in the set . A set is a subset of , written , if all elements in are also in .   "
},
{
  "id": "example-1",
  "level": "2",
  "url": "sec-setsandfunctions.html#example-1",
  "type": "Example",
  "number": "1.2.2",
  "title": "Natural numbers as a set.",
  "body": " Natural numbers as a set   The set of natural numbers is one of the first sets we learn to work with. Examples of subsets include the even numbers , the numbers between and  and the empty set which, as its name suggests, is the set with no elements. To denote that these are subsets, one would write or . Of course, negative integers are not natural numbers, so the integers do not form a subset of the naturals. We can denote this fact by .   "
},
{
  "id": "def-intuni",
  "level": "2",
  "url": "sec-setsandfunctions.html#def-intuni",
  "type": "Definition",
  "number": "1.2.3",
  "title": "",
  "body": "   intersections and unions of subsets    Given subsets their intersection is while their union is    "
},
{
  "id": "def-productset",
  "level": "2",
  "url": "sec-setsandfunctions.html#def-productset",
  "type": "Definition",
  "number": "1.2.4",
  "title": "",
  "body": "   Cartesian product of sets    The product set of and is the set of ordered pairs . For a positive integer , we denote by the -fold product of with itself consisting of -tuples .   "
},
{
  "id": "example-2",
  "level": "2",
  "url": "sec-setsandfunctions.html#example-2",
  "type": "Example",
  "number": "1.2.5",
  "title": "Product sets.",
  "body": " Product sets   We write and for -dimensional real (or Euclidean) and complex space. The points of are -tuples of real numbers (although in some contexts, we will write them as columns instead of rows). The cases of the real line and the Cartesian plane or most likely very familiar to you by now. Three dimensional space can also be given Cartesian coordinates by considering Here we take to be a height coordinate and place the Cartesian plane flat at height zero . We do this so that, looking downward at the plane, the positive -axis moves counter-clockwise towards the positive -axis. This method of orienting three space is called the Right-hand rule .   "
},
{
  "id": "def-function",
  "level": "2",
  "url": "sec-setsandfunctions.html#def-function",
  "type": "Definition",
  "number": "1.2.6",
  "title": "",
  "body": "   function from to    A function  from the set to the set is a subset of which satisfies the property :  Given any element in , there exists a unique pair in .  The element from the pair is written and we think of as assigning to .   "
},
{
  "id": "p-45",
  "level": "2",
  "url": "sec-setsandfunctions.html#p-45",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "graph domain codomain range image "
},
{
  "id": "ex-1varfunction",
  "level": "2",
  "url": "sec-setsandfunctions.html#ex-1varfunction",
  "type": "Example",
  "number": "1.2.7",
  "title": "Functions of one real variable.",
  "body": " Functions of one real variable   A calculus student spends nearly all of their time thinking about functions where is some interval in . Note that, for these functions, the property in is precisely the vertical line test for a function.  In a calculus course, the notation above is rare and functions are often written computationally in terms of a formula or referred to as as in: This last statement is actually talking about the abstract definition of a function, namely, its graph: Note that we did not define the domain of here, and it could indeed be any subset of and the most general set would be itself. We did define the codomain of as in , but, if we take the domain to be , we can compute the range to be . We see that the codomain and range of a function may indeed be distinct.   "
},
{
  "id": "def-functionprops",
  "level": "2",
  "url": "sec-setsandfunctions.html#def-functionprops",
  "type": "Definition",
  "number": "1.2.8",
  "title": "",
  "body": "   onto, one-to-one functions and one-to-one correspondence    Let be a function.  We say that is one-to-one (or 1-1) if the equality implies that .  We say that is onto if is the range of .  We say that is a one-to-one correspondence if it is both one-to-one and onto.  The element from the pair is written and we think of as assigning to .   "
},
{
  "id": "example-4",
  "level": "2",
  "url": "sec-setsandfunctions.html#example-4",
  "type": "Example",
  "number": "1.2.9",
  "title": "One-to-one and onto functions.",
  "body": " One-to-one and onto functions   As it turns out, functions can satisfy none, some or all of the properties in . Indeed, consider the following list of functions:    "
},
{
  "id": "def-functioncomp",
  "level": "2",
  "url": "sec-setsandfunctions.html#def-functioncomp",
  "type": "Definition",
  "number": "1.2.10",
  "title": "",
  "body": "   composition of functions    Given functions and the composite function is defined by the formula    "
},
{
  "id": "p-56",
  "level": "2",
  "url": "sec-setsandfunctions.html#p-56",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "inverse function "
},
{
  "id": "prop-invertible",
  "level": "2",
  "url": "sec-setsandfunctions.html#prop-invertible",
  "type": "Proposition",
  "number": "1.2.11",
  "title": "",
  "body": "  A function has an inverse function if and only if it is a one-to-one correspondence. In this case, its inverse is unique.    We need to show both that a one-to-one correspondence has an inverse and that a function with an inverse is a one-to-one correspondence. Let's start with the latter and assume has an inverse . To see that is one-to-one, suppose . Then showing that is one-to-one. To see that is onto, simply observe that for any , we have that so that is in the range of and is onto.  Now for the converse. Suppose is a one-to-one correspondence and let be any element of . Then, since is onto, there is some in with . We define . To see that this makes sense, we need to verify (*) in and show that is unique. But if for some other in , then is not one-to-one, so must be unique implying is a function. It is clear that so that and so that . Thus is an inverse function to .  For the last statement about the uniqueness of the function , one considers what would happen if were another inverse. Then for any in , But this means that as a function and is the unique inverse.   "
},
{
  "id": "ex-bijection1",
  "level": "2",
  "url": "sec-setsandfunctions.html#ex-bijection1",
  "type": "Example",
  "number": "1.2.12",
  "title": "A function and its inverse.",
  "body": " A function and its inverse   Consider the function as a function from to . We note that and that its derivative is . So it is an increasing function which implies it is one-to-one (the conclusion made is true, but the argument has a flaw... why?). Encouraged by this, we can compute an inverse to . Since we have So that . Thus gives an inverse.   "
},
{
  "id": "p-62",
  "level": "2",
  "url": "sec-setsandfunctions.html#p-62",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "vector valued functions "
},
{
  "id": "p-63",
  "level": "2",
  "url": "sec-setsandfunctions.html#p-63",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "path curve "
},
{
  "id": "p-64",
  "level": "2",
  "url": "sec-setsandfunctions.html#p-64",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "scalar "
},
{
  "id": "exercise-7",
  "level": "2",
  "url": "sec-setsandfunctions.html#exercise-7",
  "type": "Exercise",
  "number": "1.2.1",
  "title": "",
  "body": " Explain the claim in that the property is the same as the vertical line test. Likewise, explain why one of these functions is one-to-one if and only if it survives the horizontal line test.  "
},
{
  "id": "exercise-8",
  "level": "2",
  "url": "sec-setsandfunctions.html#exercise-8",
  "type": "Exercise",
  "number": "1.2.2",
  "title": "",
  "body": " Let and both be considered as functions from to . Show that commutativity fails for their composition.  "
},
{
  "id": "exercise-9",
  "level": "2",
  "url": "sec-setsandfunctions.html#exercise-9",
  "type": "Exercise",
  "number": "1.2.3",
  "title": "",
  "body": " What is the flaw in the argument in .  "
},
{
  "id": "exercise-10",
  "level": "2",
  "url": "sec-setsandfunctions.html#exercise-10",
  "type": "Exercise",
  "number": "1.2.4",
  "title": "",
  "body": "A function has a left inverse if holds for some and a right inverse if equation holds for some .  Prove that has a left inverse if and only if it is one-to-one.   Prove that has a right inverse if and only if it is onto.  "
},
{
  "id": "exercise-11",
  "level": "2",
  "url": "sec-setsandfunctions.html#exercise-11",
  "type": "Exercise",
  "number": "1.2.5",
  "title": "",
  "body": " Inverse trigonometric functions are often used in a second semester calculus course. They are, however, frequently misunderstood because of their dependence on the subdomain of the original function. The standard range for is . Give an alternative definition of as an inverse to by specifying another domain where is one-to-one. What is the domain of your new ?  "
},
{
  "id": "exercise-12",
  "level": "2",
  "url": "sec-setsandfunctions.html#exercise-12",
  "type": "Exercise",
  "number": "1.2.6",
  "title": "",
  "body": "Write a formula for a function satisfying the following description:  A path parametrizing the -axis of three dimensional space .   A scalar valued function describing the distance from a point to the -axis.  "
},
{
  "id": "sec-equation",
  "level": "1",
  "url": "sec-equation.html",
  "type": "Section",
  "number": "1.3",
  "title": "Equations Review",
  "body": " Equations Review   While we learn to work with equations relatively early on in our mathematical education, we are almost never encouraged to stop and ask what a solution to such an equation actually means. Such a philosophical question may initially evoke reactions of disgust from many quantitative thinkers, but they too will eventually be convinced that the time required to answer it is well spent.  Let me clarify these ideas with the example of equation . This was the equation giving the parametrization of the unit circle. However, any teenager will tell you that the equation for the unit circle is Of course, both equations describe the circle, but they do it in very different ways. The first equation expresses a set of points in the plane as the image of the function . In doing so, it places a number at each point on the unit circle (which is the angle made with the positive -axis). This number, or parameter, is extra information and so the first equation is not just describing the unit circle, it is parametrizing it! Indeed, we could have considered and we would have a new parametrization of the same circle. There are in fact infinitely many parametrizations which are all correct descriptions of the same geometric object.  On the other hand, equation is nearly unique (you can do some silly things like multiply both sides by , but this doesn't really change the equation). It does not tell you, for example, that the point on the positive -axis is radians away from the point on the positive -axis. In fact, there is no clearly defined parameter on the points solving it, just the points themselves. This type of equation is often called implicit or a constraint equation because it is not identifying the solutions, but characterizing them implicitly.  Now, one possible answer to our initial philosophical question could be :      Convert an implicit equation to an explicit one.      Of course, our first experience with this is solving a simple equation such as with a solution So how is this solution a parametrization? Well, I contend it is a parametrization of a point by a point and could (but maybe not should ) be written for a function . Perhaps a more convincing example would be solving the implicit equation As we all know, this was solved one million years ago with a formula In this case, it is easier to see the parametrization. It is a function of two points, which we could call and and could be written  In practice, solving more general equations can be more difficult or simply impossible. For example, the distance formula between two points and in -dimensions is Thus the implicit equation for the unit sphere in with coordinates is given by However, parametrizing this sphere is a little tricky. A bit of help from spherical coordinates will show that is a solution.  To summarize the difference in the two types of equations, the implicit equation is an equation of the form where is a function from a set of possible solutions to a set of values and something special is one of those values. The actual solutions are possible solutions that satisfy the equation.  On the other hand, an explicit solution is of the form where is often an onto function from something known (usually a point, real numbers or ) to the set of actual solutions of an interesting problem or points of a space.  We have seen several examples above where the sets are subspaces of real space, but this template persists in an even broader context.    General First Order ODE  To illustrate these ideas, we consider the differential equation: Let us understand the general form of a first order ordinary differential equation (ODE) given in equation . The set of possible solutions here is the set of differentiable functions from to (or from a possible smaller domain in ). The set of values in this case is also a set of functions, albeit maybe only continuous functions. The something special is the constant function equal to zero (so in truth, the right hand side is a function, not a number). To solve this equation we would need to find a function on a known set of parameters to giving all the actual solutions (the all part is saying that is onto).  Perhaps it will bother the uninitiated student to hear that equation in its general form is absolutely impossible to solve and, in some cases, extremely difficult to understand qualitatively. However, if we take the example of a first order linear ODE, we can indeed solve it completely. This is the case when there are functions and for which the equation becomes   To solve equation we take the practical step of first considering which is known as the homogeneous case. The equation then reduces to We may take anti-derivatives of both sides with respect to to see that or (after exponentiating), This solution may be used to help find the solution when . To see that consider the expression where is a function of . Then using the product and chain rule we have that equation becomes or Putting this back into the expression for gives our general solution Note that the solution expressed here is in fact a function where for any real number .  This exposition on the solution to a first order linear ODE has been from the computational and abstract viewpoint. Later in the course, we will see a geometric viewpoint as well.     The equation is beaten into every young American as a sort of hazing initiation into society. It is usually thought of as the solution to some sort of problem (like find a line with slope ... etc ). However, from the perspective of equation , it is an implicit equation. Give a function which re-expresses the equation for a line as and find the general solution as in equation ? Can you give more than one example of ?   The unit circle has a `unit hyperbola' analog given by the implicit equation Consider the positive branch of this hyperbola (meaning solutions where . There are two very important functions that are sometimes overlooked in a calculus class called the hyperbolic sin and cosine. They are given by the formulas    Show that parametrizes the positive branch of the unit hyperbola.  Let be the set of points on the positive branch of the unit hyperbola. This question asks you to demonstrate two separate facts all at once. First, you must show that is a point in for every real number . Second, you should show that is a 1-1 correspondence. For the second part, try showing that is an increasing function which goes from negative to positive infinity.  Using complex numbers, show that the ordinary trigonometric functions are related to their hyperbolic cousins by the formulas     Find the solution to the equation in .    Solve the ODE .    "
},
{
  "id": "exercise-13",
  "level": "2",
  "url": "sec-equation.html#exercise-13",
  "type": "Exercise",
  "number": "1.3.2.1",
  "title": "",
  "body": " The equation is beaten into every young American as a sort of hazing initiation into society. It is usually thought of as the solution to some sort of problem (like find a line with slope ... etc ). However, from the perspective of equation , it is an implicit equation. Give a function which re-expresses the equation for a line as and find the general solution as in equation ? Can you give more than one example of ?  "
},
{
  "id": "exercise-14",
  "level": "2",
  "url": "sec-equation.html#exercise-14",
  "type": "Exercise",
  "number": "1.3.2.2",
  "title": "",
  "body": "The unit circle has a `unit hyperbola' analog given by the implicit equation Consider the positive branch of this hyperbola (meaning solutions where . There are two very important functions that are sometimes overlooked in a calculus class called the hyperbolic sin and cosine. They are given by the formulas    Show that parametrizes the positive branch of the unit hyperbola.  Let be the set of points on the positive branch of the unit hyperbola. This question asks you to demonstrate two separate facts all at once. First, you must show that is a point in for every real number . Second, you should show that is a 1-1 correspondence. For the second part, try showing that is an increasing function which goes from negative to positive infinity.  Using complex numbers, show that the ordinary trigonometric functions are related to their hyperbolic cousins by the formulas   "
},
{
  "id": "exercise-15",
  "level": "2",
  "url": "sec-equation.html#exercise-15",
  "type": "Exercise",
  "number": "1.3.2.3",
  "title": "",
  "body": " Find the solution to the equation in .  "
},
{
  "id": "exercise-16",
  "level": "2",
  "url": "sec-equation.html#exercise-16",
  "type": "Exercise",
  "number": "1.3.2.4",
  "title": "",
  "body": " Solve the ODE .  "
},
{
  "id": "sec-matrices1",
  "level": "1",
  "url": "sec-matrices1.html",
  "type": "Section",
  "number": "2.1",
  "title": "Matrices I",
  "body": " Matrices I  Before discussing the abstract viewpoint of real and complex vector spaces, we will become acquainted with the central computational tool of the subject - matrices. Our number system will be labelled , but for us will either be or .     an matrix    For positive integers , an  matrix is a rectangular array For a given matrix , call the -th entry of the matrix and write as shorthand to denote . The size of is where is the number of rows and the number of columns.    The quanitites can be numbers or functions; anything where all of our rules of arithmetic from hold. For then we can add two matrices of the same size by adding each entry of one to the corresponding entry of the other. With formulas, if and then Given a number in , we can also multiply the entire matrix by by just multiplying each entry by as in This operation is called scalar multiplication of a matrix and generally plays a different role than matrix multiplication which we now define.     product of two matrices    Let be an matrix and an matrix. The matrix product  is an matrix with -th entry     Note that the matrix product is only defined when the number of columns of equals the number of rows of .   Multiplying a row matrix by a column matrix   Each entry of a matrix product is obtained by multiplying a row from the first matrix with a column from the second. For example, the product of the and matrix is just a number When writing matrices, we usually drop the left and right brackets.     Arithmetic of square matrices   Square matrices are matrices of size . For a fixed , it is convenient to compute with such matrices because they can be added and multiplied without worrying about their size. For example,     Identity matrices   The identity matrix of size is a square matrix given by When is clear from the context, we may write instead of . It is not hard to see that acts as a multiplicative identity for matrix multiplication. More precisely, for and as above,    At this point, let me encourage the student to use Sage to make matrix computations. The syntax for this can be picked up as you go, but we mention a few points. First, a matrix for Sage is a list of lists. Each member list is thought of as a row in the matrix, starting at the top and working down. Try changing a few of the numbers around, the size of the matrix to make sure you are comfortable defining matrices in Sage. Now, it is very good to know how to compute by hand, but once you feel comfortable with this, you ought to relax a bit and use your tools. Let's try with Sage. To do this, we will define each matrix separately and the write the expression we are trying to compute.   Several of the arithmetic properties we reviewed in still hold with addition and multiplication replaced with their matrix counterparts.   Matrix arithmetic satisfies the properties  The matrix with all entries equal to zero is called the zero matrix and is an additive identity for matrix addition. All matrices have an additive inverse given by where the right hand side is scalar multiplication. The identity matrices act as multiplicative identities.  Both matrix addition and multiplication are associative operations when defined   Matrix addition is commutative   The distributive property holds when the operations are defined      These properties can be shown to hold by a straightforward check, with perhaps the only intricate one being the associativity of the matrix product. However, this check is too messy for these notes and completely unenlightening, so we will leave it to the masochistic student's discretion. What is most interesting and important are the properties that are not listed above, namely the ones that fail.   Non-commuting matrices   Note that matrix multiplication is not commutative . While occasionally two matrices will commute, even very simple looking matrices don't. For example but      Non-invertible matrices   A general non-zero matrix does not have a multiplicative inverse. There are occasions where we can rule out an inverse on the basis of the size of a matrix. For example, we will show that only square matrices have the hope of being invertible (i.e. having a multiplicative inverse). But even for a square matrix, this hope may be in vain. We can show this without any propositions or theorems by observing On the left we have a product of two non-zero matrices and on the right we have the zero matrix. This is a pretty bizarre phenomenon if you have only ever worked with numbers because no two non-zero numbers have product zero! Now, if the first matrix had a multiplicative inverse , then But of course, this is ridiculous, so indeed the first matrix has no inverse.    As we will see, matrices with multiplicative inverses play a central role in linear algebra. The computational criterion for the existence of an inverse and the algorithm or formula of the inverse are key results and techniques that every student should master.    Give an example of a matrix that has a left inverse, but not a right inverse. In otherwords, there exists a matrix for which but there is no matrix for which .  The size of the identity matrices I in the first and second equation may be different.  Calculate the following matrices:            Matrices do not need to have entries which are numbers. They can be functions as well. Calculate the following product as a matrix of polynomials.     Explain why a matrix cannot be invertible.  Show that for any such matrix , there is matrix which satisfies . Then adapt the argument given in .   "
},
{
  "id": "def-matrix",
  "level": "2",
  "url": "sec-matrices1.html#def-matrix",
  "type": "Definition",
  "number": "2.1.1",
  "title": "",
  "body": "   an matrix    For positive integers , an  matrix is a rectangular array For a given matrix , call the -th entry of the matrix and write as shorthand to denote . The size of is where is the number of rows and the number of columns.   "
},
{
  "id": "p-97",
  "level": "2",
  "url": "sec-matrices1.html#p-97",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "scalar multiplication "
},
{
  "id": "def-matrixproduct",
  "level": "2",
  "url": "sec-matrices1.html#def-matrixproduct",
  "type": "Definition",
  "number": "2.1.2",
  "title": "",
  "body": "   product of two matrices    Let be an matrix and an matrix. The matrix product  is an matrix with -th entry    "
},
{
  "id": "example-6",
  "level": "2",
  "url": "sec-matrices1.html#example-6",
  "type": "Example",
  "number": "2.1.3",
  "title": "Multiplying a row matrix by a column matrix.",
  "body": " Multiplying a row matrix by a column matrix   Each entry of a matrix product is obtained by multiplying a row from the first matrix with a column from the second. For example, the product of the and matrix is just a number When writing matrices, we usually drop the left and right brackets.   "
},
{
  "id": "exa-matrixarithmetic",
  "level": "2",
  "url": "sec-matrices1.html#exa-matrixarithmetic",
  "type": "Example",
  "number": "2.1.4",
  "title": "Arithmetic of square matrices.",
  "body": " Arithmetic of square matrices   Square matrices are matrices of size . For a fixed , it is convenient to compute with such matrices because they can be added and multiplied without worrying about their size. For example,   "
},
{
  "id": "example-8",
  "level": "2",
  "url": "sec-matrices1.html#example-8",
  "type": "Example",
  "number": "2.1.5",
  "title": "Identity matrices.",
  "body": " Identity matrices   The identity matrix of size is a square matrix given by When is clear from the context, we may write instead of . It is not hard to see that acts as a multiplicative identity for matrix multiplication. More precisely, for and as above,   "
},
{
  "id": "proposition-2",
  "level": "2",
  "url": "sec-matrices1.html#proposition-2",
  "type": "Proposition",
  "number": "2.1.6",
  "title": "",
  "body": " Matrix arithmetic satisfies the properties  The matrix with all entries equal to zero is called the zero matrix and is an additive identity for matrix addition. All matrices have an additive inverse given by where the right hand side is scalar multiplication. The identity matrices act as multiplicative identities.  Both matrix addition and multiplication are associative operations when defined   Matrix addition is commutative   The distributive property holds when the operations are defined     "
},
{
  "id": "example-9",
  "level": "2",
  "url": "sec-matrices1.html#example-9",
  "type": "Example",
  "number": "2.1.7",
  "title": "Non-commuting matrices.",
  "body": " Non-commuting matrices   Note that matrix multiplication is not commutative . While occasionally two matrices will commute, even very simple looking matrices don't. For example but    "
},
{
  "id": "exa-noninvertible",
  "level": "2",
  "url": "sec-matrices1.html#exa-noninvertible",
  "type": "Example",
  "number": "2.1.8",
  "title": "Non-invertible matrices.",
  "body": " Non-invertible matrices   A general non-zero matrix does not have a multiplicative inverse. There are occasions where we can rule out an inverse on the basis of the size of a matrix. For example, we will show that only square matrices have the hope of being invertible (i.e. having a multiplicative inverse). But even for a square matrix, this hope may be in vain. We can show this without any propositions or theorems by observing On the left we have a product of two non-zero matrices and on the right we have the zero matrix. This is a pretty bizarre phenomenon if you have only ever worked with numbers because no two non-zero numbers have product zero! Now, if the first matrix had a multiplicative inverse , then But of course, this is ridiculous, so indeed the first matrix has no inverse.   "
},
{
  "id": "exercise-17",
  "level": "2",
  "url": "sec-matrices1.html#exercise-17",
  "type": "Exercise",
  "number": "2.1.1",
  "title": "",
  "body": " Give an example of a matrix that has a left inverse, but not a right inverse. In otherwords, there exists a matrix for which but there is no matrix for which .  The size of the identity matrices I in the first and second equation may be different. "
},
{
  "id": "exercise-18",
  "level": "2",
  "url": "sec-matrices1.html#exercise-18",
  "type": "Exercise",
  "number": "2.1.2",
  "title": "",
  "body": "Calculate the following matrices:          "
},
{
  "id": "exercise-19",
  "level": "2",
  "url": "sec-matrices1.html#exercise-19",
  "type": "Exercise",
  "number": "2.1.3",
  "title": "",
  "body": " Matrices do not need to have entries which are numbers. They can be functions as well. Calculate the following product as a matrix of polynomials.   "
},
{
  "id": "exercise-20",
  "level": "2",
  "url": "sec-matrices1.html#exercise-20",
  "type": "Exercise",
  "number": "2.1.4",
  "title": "",
  "body": " Explain why a matrix cannot be invertible.  Show that for any such matrix , there is matrix which satisfies . Then adapt the argument given in . "
},
{
  "id": "sec-vectorspaces1",
  "level": "1",
  "url": "sec-vectorspaces1.html",
  "type": "Section",
  "number": "2.2",
  "title": "Vector Spaces I",
  "body": " Vector Spaces I  Having concluded our reviews and introduced some new arithmetic, we now proceed to explore a famous structure in linear algebra - vector spaces. While many of you will go on to study these spaces over an arbitrary field, we will restrict our attention in this course to real and complex vector spaces. We will call this set of numbers (so that is either or ). Let's begin with the abstract definition.     a vector space over or    A vector space  over is a set endowed with two operations, addition and scalar multiplication. Addition takes as its input two vectors and of and outputs . Scalar multiplication takes a scalar , which is an element of , and a vector and produces a vector . These operations have to satisfy the following properties  There is an additive identity vector ,  Addition is commutative and associative,  The number acts as a scalar multiplication identity so that ,  Scalar multiplication satisfies an associative-like property: where and ,  Scalar multiplication distributes       An extremely common alternative notation to using bold letters for vectors is to place an arrow above them as in . Having now seen the abstract definition, let us gather several examples.   The vector space of column vectors   By an overwhelming majority, the winner for the most popular vector space over is the space of column vectors: Indeed, in some books and courses, this (or its row vector counterpart) is the only example considered. Here addition and scalar multiplication are defined by viewing columns as matrices  There are some special vectors called standard basis vectors in which we will denote by . They are defined by     One may ask why column vectors are so popular and there are a couple of very reasonable responses to this question. One is that we can compute very effectively with column vectors (as we will see for the remainder of our lives). Another is that every finite dimensional vector space over is in a very precise sense equivalent to a space of column vectors. This second response is important, but it comes with a caveat which we will discuss when the time comes!   The vector space of row vectors   Rather than taking columns, we could consider row vectors Often texts will write these vectors with commas and angle brackets. I.e. as Addition and scalar multiplication is given coordinate-wise as in the column case. In the and dimensional cases (especially when ), the standard basis vectors are usually denoted . This is somewhat historically motivated, but still very common.    Although we do, Sage is built not to care about the difference between row and column vectors. It uses the following syntax to define a vector and will interpret it as a column or a row, depending on how you operate on it.    The vector space of matrices   An example that generalizes both column and row vectors is the vector space of matrices Addition and scalar multiplication were defined in .     The vector space of polynomials   A less common example, but useful one, is the vector space of polynomials of degree less than . This can be written When is known, we may just write . Addition and scalar multiplication are obtained by adding two polynomials or multiplying a polynomial by a number.     The vector space of arrows   A very useful geometric picture to have in mind for real vectors in and dimensions is the vector space of arrows. We equate two arrows if they have the same magnitude (or length) and the same direction. Adding arrows is accomplished by placing the initial point of one at the endpoint of the other and then drawing an arrow from the remaining initial point to the remaining endpoint. Scalar multiplication is obtained by scaling the magnitude (when the scale is positive) or reversing the direction and scaling (when the scale is negative).  This does indeed form a vector space over . It is nearly useless when it comes to computing, but it gives a much better picture of how vectors look and behave. As such, it will reappear frequently as we start applying vectors to ordinary differential equations and multivariable calculus.    All of the examples above share the property of being finite dimensional (which we will define soon). However, there are a great many vector spaces that do not have this property and are extensively studied.   The vector space of continuous functions   The space of continuous functions from a space to forms a vector space. Here addition is function addition and scalar multiplication is obtained by just multiplying a function by a number. More concretely, if , and we take     There are a huge number of variants of such as functions that are differentiable, bounded functions, functions that are integrable, and so on. The study of such vector spaces is one of the primary topics of functional analysis and we will only lightly dabble in this so as not to spoil the wonders that await!  One can also consider infinite column vectors or matrices, but we will stop this example madness here before it gets any further out of control. Instead, we give ourselves a bit more vocabulary concerning vectors and vector spaces.     a vector subspace    Given a vector space over , a vector subspace  of is a subset which is also a vector space over with the vector space operations inherited from . This is denoted . A vector subspace is called proper if it is not equal to .    Often we will refer to a vector subspace as a linear subspace . This should come though with a big warning: with this vocabulary, not all lines are linear!  In order to verify that a given subset of is in fact a vector space, one needs to check that it is closed under addition and scalar multiplication. In other words, we need to see that if are in and is in , then and are also in (not just in ). We record this as a proposition.    A subset of is a vector subspace if and only if it is closed under vector addition and scalar multiplication.     Subspace defined by an equation   Consider the subset That this is a vector subspace of can be verified using . Suppose are in . Then so that adding them together gives But this implies that is in so that is closed under vector addition. A similar argument shows that it is closed under scalar multiplication.  Note that if we view the vector space geometrically as the plane, the subspace is just the line of slope passing through the origin. In fact, as you will show in the exercises, any non-zero proper vector subspace of is a line through the origin.       linear combinations and span    Given vectors in a vector space over and numbers in , we call the vector a linear combination of . If is a subset of , the set of all linear combinations of vectors in is called the span of and is denoted .    Linear combinations and span are essential vocabulary when communicating how vectors sweep out spaces. For example, a linear combination of a single non-zero vector in is just a scaling of and its span is the set of all such scale multiples; namely, a line through the origin in the direction of . On the other hand, taking the span of two vectors which are not on the same line will give a plane through the origin. Moreover, if we remember these vectors we get coordinates on this plane by taking the point to the linear combination .  Sage has a class that is a vector space or subspace of another vector space. However, Sage (like us) cares about what is for such a space. Often it is preferable to use the rational numbers which Sage writes as QQ. If you evaluate the following snippet, Sage will output a vector subspace which is the span of the two vectors, along with some information about the subspace that is defined. We will learn about these terms in the coming sections.    Linear combinations of rows and columns of a matrix   A common way of viewing the matrix is as a column of row vectors by just taking In fact, this is how most computer programs will take the input of a matrix (as an array of arrays). This leads to a very fruitful way of thinking about matrix multiplication of by a row vector on the left: Note that here, rather than multiplying each entry of the matrix by the scalar , we are taking the whole row and scalar multiplying. We end up seeing that the result is a linear combination of the rows. A similar equation holds when we view as a row of column vectors and multiply on the right by a column vector    As you will show in the exercises, the span of any non-empty subset of a vector space is a vector subspace. However, some sets of vectors are better than others when it comes to spans. For example, the span of the set of all vectors in is , but that is not saying much. On the other hand, the span of the two standard basis vectors is also , yet for these vectors we get a property that we didn't have before.     a vector space basis    An ordered set of vectors is called a basis for a vector space if every vector in can be written uniquely as a linear combination of vectors in .    Note that the word uniquely appears in this definition, and it is a very important word indeed. It means that, for any vector , the coefficients in the expression are the only possible ones that give equality.  As one is often interested in whether a given set of vectors in is a basis, we will assert unambiguously that if there is any hope of this being true, we must have (this will be proven later). Even then, it is not always the case that we have a basis. However, Sage can be used to detect whether a give set of row or column vectors in is a basis. Indeed, one can simply define the vectors, take the span and check that the resulting subspace has dimension . Why this works should be rather mysterious to the student at this point, but will be clarified in the coming sections.  A couple of comments on this definition are in order. First, we take a basis to be an ordered set of vectors, but often we don't mention the ordering when it plays no role. It is not universally defined this way and occasionally is defined as just a set of vectors satisfying the uniqueness property and equation . Second, we defined a finite basis above, but one can also consider infinite ordered sets that are bases ( bases is the plural of basis). However, in the infinite case there are more important variants to the above definition of basis involving infinite sums, so for now we will stick with the finite case.  On first exposure to the concept of a basis, a student may get the wildly incorrect idea that they are in short supply. In fact, there are infinitely many bases of any non-zero rational, real or complex vector space. Nonetheless, the key advantage to having a basis around is that you can label your vectors unambiguously with arrays of numbers and thus, you can compute!  More precisely, given a basis of and a vector , we may assign to the array of numbers where are precisely the unique coefficients in equation . This gives us a function    Using a basis to give vectors coordinates   In the real case, one should think of a basis as giving a rigid set of coordinates, or a grid, that allows you to assign arrays of numbers to vectors. For example, the basis in gives Cartesian coordinates rotated clockwise by degrees and scaled by . The vector in this coordinate system is written because     To be clear, the abstract notion of a basis is that given in the definition. The computational perspective is that one can uniquely assign arrays of numbers to vectors and, as we will see, add and scalar multiply in an easy fashion. Finally, the geometric perspective is rooted in Descartes original insight that points in space could be given coordinates. This last perspective is extremely subtle in that the word could has great importance. I will make the point here that a vector space is a space of vectors or points that does not come with a preferred set of coordinates (unless the space you start with is ). Once a basis is given, or chosen, we can then assign coordinates. Indeed, while we do not walk around with a three dimensional grid attached to our head, the space we live in still exists! I may tell you that `the coffee cup is on the table over there', but you will not hear me say the coffee cup is at .    Show that every non-zero proper vector subspace of is a line through the origin.    Show that the span of any non-empty subset is a vector subspace.    Give a basis for as a vector space over .    Which, if any, of the following collections are bases? Explain your response.     Let and What is ?    Prove that the function is a one-to-one correspondence by giving a formula for the inverse function and showing it is an inverse.    "
},
{
  "id": "def-vectorspace",
  "level": "2",
  "url": "sec-vectorspaces1.html#def-vectorspace",
  "type": "Definition",
  "number": "2.2.1",
  "title": "",
  "body": "   a vector space over or    A vector space  over is a set endowed with two operations, addition and scalar multiplication. Addition takes as its input two vectors and of and outputs . Scalar multiplication takes a scalar , which is an element of , and a vector and produces a vector . These operations have to satisfy the following properties  There is an additive identity vector ,  Addition is commutative and associative,  The number acts as a scalar multiplication identity so that ,  Scalar multiplication satisfies an associative-like property: where and ,  Scalar multiplication distributes      "
},
{
  "id": "exa-columnvectors",
  "level": "2",
  "url": "sec-vectorspaces1.html#exa-columnvectors",
  "type": "Example",
  "number": "2.2.2",
  "title": "The vector space of column vectors.",
  "body": " The vector space of column vectors   By an overwhelming majority, the winner for the most popular vector space over is the space of column vectors: Indeed, in some books and courses, this (or its row vector counterpart) is the only example considered. Here addition and scalar multiplication are defined by viewing columns as matrices  There are some special vectors called standard basis vectors in which we will denote by . They are defined by    "
},
{
  "id": "example-12",
  "level": "2",
  "url": "sec-vectorspaces1.html#example-12",
  "type": "Example",
  "number": "2.2.3",
  "title": "The vector space of row vectors.",
  "body": " The vector space of row vectors   Rather than taking columns, we could consider row vectors Often texts will write these vectors with commas and angle brackets. I.e. as Addition and scalar multiplication is given coordinate-wise as in the column case. In the and dimensional cases (especially when ), the standard basis vectors are usually denoted . This is somewhat historically motivated, but still very common.   "
},
{
  "id": "example-13",
  "level": "2",
  "url": "sec-vectorspaces1.html#example-13",
  "type": "Example",
  "number": "2.2.4",
  "title": "The vector space of matrices.",
  "body": " The vector space of matrices   An example that generalizes both column and row vectors is the vector space of matrices Addition and scalar multiplication were defined in .   "
},
{
  "id": "example-14",
  "level": "2",
  "url": "sec-vectorspaces1.html#example-14",
  "type": "Example",
  "number": "2.2.5",
  "title": "The vector space of polynomials.",
  "body": " The vector space of polynomials   A less common example, but useful one, is the vector space of polynomials of degree less than . This can be written When is known, we may just write . Addition and scalar multiplication are obtained by adding two polynomials or multiplying a polynomial by a number.   "
},
{
  "id": "example-15",
  "level": "2",
  "url": "sec-vectorspaces1.html#example-15",
  "type": "Example",
  "number": "2.2.6",
  "title": "The vector space of arrows.",
  "body": " The vector space of arrows   A very useful geometric picture to have in mind for real vectors in and dimensions is the vector space of arrows. We equate two arrows if they have the same magnitude (or length) and the same direction. Adding arrows is accomplished by placing the initial point of one at the endpoint of the other and then drawing an arrow from the remaining initial point to the remaining endpoint. Scalar multiplication is obtained by scaling the magnitude (when the scale is positive) or reversing the direction and scaling (when the scale is negative).  This does indeed form a vector space over . It is nearly useless when it comes to computing, but it gives a much better picture of how vectors look and behave. As such, it will reappear frequently as we start applying vectors to ordinary differential equations and multivariable calculus.   "
},
{
  "id": "exa-functions",
  "level": "2",
  "url": "sec-vectorspaces1.html#exa-functions",
  "type": "Example",
  "number": "2.2.7",
  "title": "The vector space of continuous functions.",
  "body": " The vector space of continuous functions   The space of continuous functions from a space to forms a vector space. Here addition is function addition and scalar multiplication is obtained by just multiplying a function by a number. More concretely, if , and we take    "
},
{
  "id": "def-vectorsubspace",
  "level": "2",
  "url": "sec-vectorspaces1.html#def-vectorsubspace",
  "type": "Definition",
  "number": "2.2.8",
  "title": "",
  "body": "   a vector subspace    Given a vector space over , a vector subspace  of is a subset which is also a vector space over with the vector space operations inherited from . This is denoted . A vector subspace is called proper if it is not equal to .   "
},
{
  "id": "p-131",
  "level": "2",
  "url": "sec-vectorspaces1.html#p-131",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "linear subspace "
},
{
  "id": "p-132",
  "level": "2",
  "url": "sec-vectorspaces1.html#p-132",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "closed "
},
{
  "id": "prop-vsubspace",
  "level": "2",
  "url": "sec-vectorspaces1.html#prop-vsubspace",
  "type": "Proposition",
  "number": "2.2.9",
  "title": "",
  "body": "  A subset of is a vector subspace if and only if it is closed under vector addition and scalar multiplication.   "
},
{
  "id": "example-17",
  "level": "2",
  "url": "sec-vectorspaces1.html#example-17",
  "type": "Example",
  "number": "2.2.10",
  "title": "Subspace defined by an equation.",
  "body": " Subspace defined by an equation   Consider the subset That this is a vector subspace of can be verified using . Suppose are in . Then so that adding them together gives But this implies that is in so that is closed under vector addition. A similar argument shows that it is closed under scalar multiplication.  Note that if we view the vector space geometrically as the plane, the subspace is just the line of slope passing through the origin. In fact, as you will show in the exercises, any non-zero proper vector subspace of is a line through the origin.   "
},
{
  "id": "def-lincomb",
  "level": "2",
  "url": "sec-vectorspaces1.html#def-lincomb",
  "type": "Definition",
  "number": "2.2.11",
  "title": "",
  "body": "   linear combinations and span    Given vectors in a vector space over and numbers in , we call the vector a linear combination of . If is a subset of , the set of all linear combinations of vectors in is called the span of and is denoted .   "
},
{
  "id": "exa-matrixasrowcolumns",
  "level": "2",
  "url": "sec-vectorspaces1.html#exa-matrixasrowcolumns",
  "type": "Example",
  "number": "2.2.12",
  "title": "Linear combinations of rows and columns of a matrix.",
  "body": " Linear combinations of rows and columns of a matrix   A common way of viewing the matrix is as a column of row vectors by just taking In fact, this is how most computer programs will take the input of a matrix (as an array of arrays). This leads to a very fruitful way of thinking about matrix multiplication of by a row vector on the left: Note that here, rather than multiplying each entry of the matrix by the scalar , we are taking the whole row and scalar multiplying. We end up seeing that the result is a linear combination of the rows. A similar equation holds when we view as a row of column vectors and multiply on the right by a column vector   "
},
{
  "id": "def-basis",
  "level": "2",
  "url": "sec-vectorspaces1.html#def-basis",
  "type": "Definition",
  "number": "2.2.13",
  "title": "",
  "body": "   a vector space basis    An ordered set of vectors is called a basis for a vector space if every vector in can be written uniquely as a linear combination of vectors in .   "
},
{
  "id": "example-19",
  "level": "2",
  "url": "sec-vectorspaces1.html#example-19",
  "type": "Example",
  "number": "2.2.14",
  "title": "Using a basis to give vectors coordinates.",
  "body": " Using a basis to give vectors coordinates   In the real case, one should think of a basis as giving a rigid set of coordinates, or a grid, that allows you to assign arrays of numbers to vectors. For example, the basis in gives Cartesian coordinates rotated clockwise by degrees and scaled by . The vector in this coordinate system is written because    "
},
{
  "id": "exercise-21",
  "level": "2",
  "url": "sec-vectorspaces1.html#exercise-21",
  "type": "Exercise",
  "number": "2.2.1",
  "title": "",
  "body": " Show that every non-zero proper vector subspace of is a line through the origin.  "
},
{
  "id": "exercise-22",
  "level": "2",
  "url": "sec-vectorspaces1.html#exercise-22",
  "type": "Exercise",
  "number": "2.2.2",
  "title": "",
  "body": " Show that the span of any non-empty subset is a vector subspace.  "
},
{
  "id": "exercise-23",
  "level": "2",
  "url": "sec-vectorspaces1.html#exercise-23",
  "type": "Exercise",
  "number": "2.2.3",
  "title": "",
  "body": " Give a basis for as a vector space over .  "
},
{
  "id": "exercise-24",
  "level": "2",
  "url": "sec-vectorspaces1.html#exercise-24",
  "type": "Exercise",
  "number": "2.2.4",
  "title": "",
  "body": " Which, if any, of the following collections are bases? Explain your response.   "
},
{
  "id": "exercise-25",
  "level": "2",
  "url": "sec-vectorspaces1.html#exercise-25",
  "type": "Exercise",
  "number": "2.2.5",
  "title": "",
  "body": " Let and What is ?  "
},
{
  "id": "exercise-26",
  "level": "2",
  "url": "sec-vectorspaces1.html#exercise-26",
  "type": "Exercise",
  "number": "2.2.6",
  "title": "",
  "body": " Prove that the function is a one-to-one correspondence by giving a formula for the inverse function and showing it is an inverse.  "
},
{
  "id": "sec-lineartransformations1",
  "level": "1",
  "url": "sec-lineartransformations1.html",
  "type": "Section",
  "number": "2.3",
  "title": "Linear Transformations I",
  "body": " Linear Transformations I  As was mentioned in , functions play a central role in much of mathematics. So what about functions where and are vector spaces over (remember that is either or )? Well, in fact, such functions are what we truly should label vector valued functions because they are functions with values in a vector space. For now though, we will not consider this level of generality, but rather stick to functions that satisfy a very basic and important property.     a linear transformation from to    Suppose and are vector spaces over and is a function. We say that is a linear transformation if, for any vectors and in and any scalars and of we have    Two comments are in order here. First, you have seen linear transformations many times in your life but probably not known that they had a name. Second, amongst all functions between vector spaces, being linear is a very rare and exceptionally strong condition. If you write down a random function from to it is most likely not linear! That said let us consider some examples.   Matrix multiplication as a linear transformation   The most important example of a linear transformation is multiplication by a matrix (on the left) which will take column vectors to column vectors . This operation can be written as It is a slightly annoying (but easy) exercise to show that this is indeed a linear transformation.    As it turns out, this example is the computational heart of linear algebra and can be used to describe any linear transformation between two finite dimensional vector spaces (we will see this shortly). So it is worth taking a look at a few special cases of such transformations.   Rotation matrices   We have seen that rotation in the complex plane can be obtained by multiplication by a complex number of the form . However, if we think of the plane as the real vector space we can look at such a rotation as multiplication by the matrix     Projection matrices   Multiplying by a matrix can give a projection. For example, the matrix will give In fact, projections from to any vector subspace can be written as matrix multiplications. We will see more on this when we study more on linear geometry.     Scaling along axes   Multiplying by a matrix can scale in various directions. In doing so, one can relate common shapes. For example, if we multiply all the points of the unit circle satisfying by the matrix we obtain the set of points of the ellipse given by A useful consequence of this is when you want to parametrize the ellipse , you simply parametrize the circle and compose with getting Note that the map is not a linear transformation, but the use of a linear transformation (along with some basic knowledge of trigonometry) helped us find it!    The matrix in is an example of a diagonal matrix. These are square matrices with zeros everywhere except possibly on the diagonal. We will use notation of the form An important diagonal matrix is the identity matrix .  We will be working extensively with matrices in several contexts, but for now, let us recall a couple of other important examples of linear transformations.   Coordinates as a linear transformation   Suppose is a vector space over and is a basis. Recall that in equation we defined a function This is a linear transformation as you will show in the exercises. As was shown in the previous set of exercises, also has an inverse. Thus we may use to identify the abstract vector space with the concrete column vector space . Note however that this identification depended on our choice of .     The derivative as a linear transformation   The vector space of continuously differentiable functions on is denoted . Then is a linear transformation.    One should also note that important operators of quantum mechanics (creation and annihilation operators) are linear transformations as well. These last examples show that, while matrix multiplication is a very important type of linear transformation, there are many natural examples that are not packaged well as matrices.  A linear transformation gives rise to interesting linear subspaces and equations which we define here.    ,  a linear transformation from to    Given vector spaces and over and a linear transformation   The kernel of is the set of vectors   The image of is the range of       The kernel is sometimes called the nullspace of because it is the set of vectors of that are sent to the zero vector. Let's check that these subsets are in fact vector subspaces.    The kernel and image of a linear transformation are vector subspaces.    We stick with the notation of , and given in . By , we only need to show that and are closed under vector addition and scalar multiplication. So let's check. If and are in the kernel, then by definition . So then using the definition of a linear transformation we see This implies is in the kernel as well and so vector addition is closed. Similarly, for any scalar in , so that scalar multiplication of a vector in is still in . Thus is a vector subspace of .  For the image we proceed in a similar manner. If and are in the image then there are vectors and for which and . But then so that is also in the image and the image is closed under vector addition. The closedness of scalar multiplication is also justified by observing    We mention this proposition here because many important subspaces (for example, planes, lines, tangent spaces, etc) arise most naturally as a kernel or an image of some linear transformation. Of course, being linear is a very limiting property of a space, so the proposition should clarify that the geometry of these spaces is very basic. Another reason to consider these spaces is that they inform us on properties of .    Let and be vector spaces and be a linear transformation. As a function, is one-to-one if and only if . It is onto if and only if .    The second statement is just the definition of an onto function (that the range equals the codomain). For the first, suppose that is one-to-one and is in the kernel . Then so that . But since was an arbitrary element of the kernel, this means that the only element of is zero itself.  Conversely, suppose only contains zero and Then This implies is in the kernel. But since the kernel only contains zero, we have that or which gives us that is one-to-one.    It turns out the set of all linear transformations from to forms its own vector space with the natural operations: where and are linear transformations from to . The most important example of this is when is the vector space itself.     the dual vector space to    The dual vector space to , denoted , is the vector space of linear transformations .    Some dual vectors are well known to even the most inattentive calculus student:   Evaluation as a dual vector   Suppose is the vector space of polynomials with complex coefficients. Then evaluating a polynomial at is a linear transformation given by     Many more examples exist with infinite dimensional vector spaces of functions.   Limit as a dual vector   Let be the vector space of functions from to such that exists. Then, is a linear transformation. Part of this is a fancy way of saying something known to every first year calculus student as The limit of the sum is the sum of the limits.     Definite integral as a dual vector   Recall that denotes the set of continuous functions on the closed interval . Then given by is a linear transformation.    For a vector space with a finite basis , we can define a dual basis  of the dual space by taking One can show that this is in fact a basis. However, in the infinite dimensional setting, this no longer holds and there are several definitions and conditions that are created to recover weaker versions of it.  It shows a measure of mathematical maturity to appreciate that, while and look a lot alike, they are in fact two separate vector spaces with their own personalities (and more importantly, transformation properties). This will be more apparent when we develop multivariable calculus.   Calculate:   and where   and if   Give complete responses to the following questions:   Let be the linear transformation from to given by In other words, is multiplication by the matrix . Describe the kernel of in familiar geometric terms.   The equation defining the kernel is an implicit equation which can be thought of as a problem that needs to be solved . As in , a solution to this equation could be a function which parameterizes the geometric object you described above. Find such a parameterization which is also a linear transformation.  This can also be given as multiplication by a matrix.  Whether a function is linear or not may depend on what is, even for the same vector space:   Consider as a real vector space. Is complex conjugation a linear transformation?   Consider as a complex vector space. Is complex conjugation a linear transformation?   A linear isomorphism is a linear transformation that is also a one-to-one correspondence. Show that if is a basis of a vector space over the function is a linear transformation. By a prior exercise, this shows that it is a linear isomorphism.  If is a linear isomorphism, what is its kernel and image? Explain your response.  Suppose is an matrix with entries in and is the linear transformation obtained by left multiplying by . In other words, Prove that is a linear isomorphism if and only if the columns of are a basis of . Use the part on columns from and the definition of a basis.  Verify that the multiplication by given in is indeed counter-clockwise rotation by . Write a column vector in polar coordinates and see what happens when you multiply by the matrix .  Using the standard basis, write projection from the plane to the line as multiplication by a matrix.   "
},
{
  "id": "p-155",
  "level": "2",
  "url": "sec-lineartransformations1.html#p-155",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "vector valued functions "
},
{
  "id": "def-lineartrans",
  "level": "2",
  "url": "sec-lineartransformations1.html#def-lineartrans",
  "type": "Definition",
  "number": "2.3.1",
  "title": "",
  "body": "   a linear transformation from to    Suppose and are vector spaces over and is a function. We say that is a linear transformation if, for any vectors and in and any scalars and of we have   "
},
{
  "id": "example-20",
  "level": "2",
  "url": "sec-lineartransformations1.html#example-20",
  "type": "Example",
  "number": "2.3.2",
  "title": "Matrix multiplication as a linear transformation.",
  "body": " Matrix multiplication as a linear transformation   The most important example of a linear transformation is multiplication by a matrix (on the left) which will take column vectors to column vectors . This operation can be written as It is a slightly annoying (but easy) exercise to show that this is indeed a linear transformation.   "
},
{
  "id": "exa-matrixrotation",
  "level": "2",
  "url": "sec-lineartransformations1.html#exa-matrixrotation",
  "type": "Example",
  "number": "2.3.3",
  "title": "Rotation matrices.",
  "body": " Rotation matrices   We have seen that rotation in the complex plane can be obtained by multiplication by a complex number of the form . However, if we think of the plane as the real vector space we can look at such a rotation as multiplication by the matrix   "
},
{
  "id": "example-22",
  "level": "2",
  "url": "sec-lineartransformations1.html#example-22",
  "type": "Example",
  "number": "2.3.4",
  "title": "Projection matrices.",
  "body": " Projection matrices   Multiplying by a matrix can give a projection. For example, the matrix will give In fact, projections from to any vector subspace can be written as matrix multiplications. We will see more on this when we study more on linear geometry.   "
},
{
  "id": "exa-2diag",
  "level": "2",
  "url": "sec-lineartransformations1.html#exa-2diag",
  "type": "Example",
  "number": "2.3.5",
  "title": "Scaling along axes.",
  "body": " Scaling along axes   Multiplying by a matrix can scale in various directions. In doing so, one can relate common shapes. For example, if we multiply all the points of the unit circle satisfying by the matrix we obtain the set of points of the ellipse given by A useful consequence of this is when you want to parametrize the ellipse , you simply parametrize the circle and compose with getting Note that the map is not a linear transformation, but the use of a linear transformation (along with some basic knowledge of trigonometry) helped us find it!   "
},
{
  "id": "p-163",
  "level": "2",
  "url": "sec-lineartransformations1.html#p-163",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "diagonal "
},
{
  "id": "example-24",
  "level": "2",
  "url": "sec-lineartransformations1.html#example-24",
  "type": "Example",
  "number": "2.3.6",
  "title": "Coordinates as a linear transformation.",
  "body": " Coordinates as a linear transformation   Suppose is a vector space over and is a basis. Recall that in equation we defined a function This is a linear transformation as you will show in the exercises. As was shown in the previous set of exercises, also has an inverse. Thus we may use to identify the abstract vector space with the concrete column vector space . Note however that this identification depended on our choice of .   "
},
{
  "id": "example-25",
  "level": "2",
  "url": "sec-lineartransformations1.html#example-25",
  "type": "Example",
  "number": "2.3.7",
  "title": "The derivative as a linear transformation.",
  "body": " The derivative as a linear transformation   The vector space of continuously differentiable functions on is denoted . Then is a linear transformation.   "
},
{
  "id": "def-kernelimage",
  "level": "2",
  "url": "sec-lineartransformations1.html#def-kernelimage",
  "type": "Definition",
  "number": "2.3.8",
  "title": "",
  "body": "  ,  a linear transformation from to    Given vector spaces and over and a linear transformation   The kernel of is the set of vectors   The image of is the range of      "
},
{
  "id": "p-170",
  "level": "2",
  "url": "sec-lineartransformations1.html#p-170",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "nullspace "
},
{
  "id": "prop-kernelimage",
  "level": "2",
  "url": "sec-lineartransformations1.html#prop-kernelimage",
  "type": "Proposition",
  "number": "2.3.9",
  "title": "",
  "body": "  The kernel and image of a linear transformation are vector subspaces.    We stick with the notation of , and given in . By , we only need to show that and are closed under vector addition and scalar multiplication. So let's check. If and are in the kernel, then by definition . So then using the definition of a linear transformation we see This implies is in the kernel as well and so vector addition is closed. Similarly, for any scalar in , so that scalar multiplication of a vector in is still in . Thus is a vector subspace of .  For the image we proceed in a similar manner. If and are in the image then there are vectors and for which and . But then so that is also in the image and the image is closed under vector addition. The closedness of scalar multiplication is also justified by observing   "
},
{
  "id": "proposition-5",
  "level": "2",
  "url": "sec-lineartransformations1.html#proposition-5",
  "type": "Proposition",
  "number": "2.3.10",
  "title": "",
  "body": "  Let and be vector spaces and be a linear transformation. As a function, is one-to-one if and only if . It is onto if and only if .    The second statement is just the definition of an onto function (that the range equals the codomain). For the first, suppose that is one-to-one and is in the kernel . Then so that . But since was an arbitrary element of the kernel, this means that the only element of is zero itself.  Conversely, suppose only contains zero and Then This implies is in the kernel. But since the kernel only contains zero, we have that or which gives us that is one-to-one.   "
},
{
  "id": "def-dualspace",
  "level": "2",
  "url": "sec-lineartransformations1.html#def-dualspace",
  "type": "Definition",
  "number": "2.3.11",
  "title": "",
  "body": "   the dual vector space to    The dual vector space to , denoted , is the vector space of linear transformations .   "
},
{
  "id": "example-26",
  "level": "2",
  "url": "sec-lineartransformations1.html#example-26",
  "type": "Example",
  "number": "2.3.12",
  "title": "Evaluation as a dual vector.",
  "body": " Evaluation as a dual vector   Suppose is the vector space of polynomials with complex coefficients. Then evaluating a polynomial at is a linear transformation given by    "
},
{
  "id": "example-27",
  "level": "2",
  "url": "sec-lineartransformations1.html#example-27",
  "type": "Example",
  "number": "2.3.13",
  "title": "Limit as a dual vector.",
  "body": " Limit as a dual vector   Let be the vector space of functions from to such that exists. Then, is a linear transformation. Part of this is a fancy way of saying something known to every first year calculus student as The limit of the sum is the sum of the limits.   "
},
{
  "id": "example-28",
  "level": "2",
  "url": "sec-lineartransformations1.html#example-28",
  "type": "Example",
  "number": "2.3.14",
  "title": "Definite integral as a dual vector.",
  "body": " Definite integral as a dual vector   Recall that denotes the set of continuous functions on the closed interval . Then given by is a linear transformation.   "
},
{
  "id": "p-185",
  "level": "2",
  "url": "sec-lineartransformations1.html#p-185",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "dual basis "
},
{
  "id": "exercise-27",
  "level": "2",
  "url": "sec-lineartransformations1.html#exercise-27",
  "type": "Exercise",
  "number": "2.3.1",
  "title": "",
  "body": "Calculate:   and where   and if  "
},
{
  "id": "exe-linearequation",
  "level": "2",
  "url": "sec-lineartransformations1.html#exe-linearequation",
  "type": "Exercise",
  "number": "2.3.2",
  "title": "",
  "body": "Give complete responses to the following questions:   Let be the linear transformation from to given by In other words, is multiplication by the matrix . Describe the kernel of in familiar geometric terms.   The equation defining the kernel is an implicit equation which can be thought of as a problem that needs to be solved . As in , a solution to this equation could be a function which parameterizes the geometric object you described above. Find such a parameterization which is also a linear transformation.  This can also be given as multiplication by a matrix. "
},
{
  "id": "exercise-29",
  "level": "2",
  "url": "sec-lineartransformations1.html#exercise-29",
  "type": "Exercise",
  "number": "2.3.3",
  "title": "",
  "body": "Whether a function is linear or not may depend on what is, even for the same vector space:   Consider as a real vector space. Is complex conjugation a linear transformation?   Consider as a complex vector space. Is complex conjugation a linear transformation?  "
},
{
  "id": "exe-coordiso",
  "level": "2",
  "url": "sec-lineartransformations1.html#exe-coordiso",
  "type": "Exercise",
  "number": "2.3.4",
  "title": "",
  "body": "A linear isomorphism is a linear transformation that is also a one-to-one correspondence. Show that if is a basis of a vector space over the function is a linear transformation. By a prior exercise, this shows that it is a linear isomorphism. "
},
{
  "id": "exercise-31",
  "level": "2",
  "url": "sec-lineartransformations1.html#exercise-31",
  "type": "Exercise",
  "number": "2.3.5",
  "title": "",
  "body": "If is a linear isomorphism, what is its kernel and image? Explain your response. "
},
{
  "id": "exercise-32",
  "level": "2",
  "url": "sec-lineartransformations1.html#exercise-32",
  "type": "Exercise",
  "number": "2.3.6",
  "title": "",
  "body": "Suppose is an matrix with entries in and is the linear transformation obtained by left multiplying by . In other words, Prove that is a linear isomorphism if and only if the columns of are a basis of . Use the part on columns from and the definition of a basis. "
},
{
  "id": "exercise-33",
  "level": "2",
  "url": "sec-lineartransformations1.html#exercise-33",
  "type": "Exercise",
  "number": "2.3.7",
  "title": "",
  "body": "Verify that the multiplication by given in is indeed counter-clockwise rotation by . Write a column vector in polar coordinates and see what happens when you multiply by the matrix . "
},
{
  "id": "exercise-34",
  "level": "2",
  "url": "sec-lineartransformations1.html#exercise-34",
  "type": "Exercise",
  "number": "2.3.8",
  "title": "",
  "body": "Using the standard basis, write projection from the plane to the line as multiplication by a matrix. "
},
{
  "id": "sec-matrices2",
  "level": "1",
  "url": "sec-matrices2.html",
  "type": "Section",
  "number": "2.4",
  "title": "Matrices II",
  "body": " Matrices II   Having seen what the world is like from the abstract viewpoint, it is now time to take a deep breath with mindless computations if only to reassure ourselves that we understand what is going on. So in this section, we will return to and exercise in order to solve the fundamental linear equation: where is a linear transformation. This is the abstract version of the equation, but the computational one is the case where and is multiplication by an matrix . Every linear algebra course that has ever been given and will ever be given spends time solving this equation, and we are no exception! So let us start by writing it out with variables, entries and constants. Our variables (i.e. potential solutions) are the coordinates in the column vector so we write  Our entries (or, as we see in a moment, coefficients) of this equation are those of our matrix   Finally our constants are coordinates of which are often written as Now equation turns into the matrix equation which, when written out using equation , gives the linear system of equations   Before discussing the algorithm to solve these equations, we take a moment to look at three examples.   Overdetermined systems   Let and Then our system of equations is in fact three equations of two variables The first and the third equation tell us that any solution must have and both equal to . But the second equation then would imply , which does not make sense here on earth. So for this example there are no solutions ! This case where the number of equations exceeds the number of variables is called an overdetermined system of linear equations. For these, it is often the case that no solution exists (although there certainly are exceptions!).    Let us see what happens if we just flip our matrix (called taking a transpose):   Underdetermined systems   Let and Now our system of equations is two equations of three variables Now, playing around a little with these equations, it may occur to you that, for any number , the equations give a solution. So for this example there are an infinite number of solutions ! In fact, we can consider the function as a parametrization of all solutions. This case where the number of equations is less than the number of variables is called an underdetermined system of linear equations. For these, it is often the case that an infinite number of solutions exist (although there are cases when none exist at all!).     Systems with unique solutions   For this final example we will cut off the last column of the previous example's matrix (called taking a submatrix). So we consider and keep giving two equations in two variables Notice that the second equation fully specifies , so substituting into the first and solving gives . So is the only solution. In this case, a solution exists and it is unique .    Any technique to solve the general equation should help us answer:   Whether a solution exists.  If it does exist, is it unique?  If it is not unique, what is a function parametrizing all solutions?   Happily, such a technique is well known and called either row reduction or Gaussian elimination .    Row Echelon Form  To understand this algorithm, we start at the end.     row echelon form of a matrix    An matrix is in row echelon form if no zero row has a non-zero row below it and the first nonzero entry of any row has only zero entries to the left and below its own position (i.e. to its southwest).    More precisely, if is the first non-zero entry in the -th row then for all entries with (on or below the -th row) and (to the left of the -th column) excluding the case where and . The first non-zero entry of any row is called the leading coefficient for that row (it is also called a pivot ). This definition is best understood by looking at a few examples and non-examples.   Examples of row echelon form matrices   Here are some matrices in row echelon form: And here are some that are not To see why the second set of matrices are not in row echelon form, let's look at each in turn. The first non-example we see that below and to the left of are nonzero entries . In the second case, we see that below the -entry is . In the last case, even though the -entry is not directly below a leading coefficient, it is to the left and below the leading coefficient in the -position, disqualifying this matrix from being in row echelon form.    There is a special type of row echelon form called reduced row echelon form where we add the conditions that:   Every leading coefficient is .  Every other entry on a column of a leading coefficient is zero.   None of the matrices in are in reduced form, but the following matrices are: Let us now set out the strategy for solving equation . First, we will solve this system if the matrix we start with is in reduced row echelon form. We will quickly see that in these cases, we obtain answers to the existence, uniqueness and parametrization questions above. Second, we will discover the algorithm to take an arbitrary matrix and transform it into a matrix in reduced echelon form by taking simple steps (called elementary row operations).  To accomplish step one we make a definition.     basic and free variables    Let be a matrix in row echelon form and the column of variables from equation . We say that the variable is a basic variable if there is a leading coefficient of some row of on the -th column. Otherwise we call it a free variable .    Note that every variable is either basic or free. Now we state our solution as a theorem.    Let be an matrix in reduced row echelon form with free variables with indices and basic variables with indices . Then for the equation   There are no solutions if and only if and for some .  If we are not in case (1), the vector is a solution and is unique if .  If we are not in case (1) and , then for any define the function by For in take Then is a one-to-one correspondence between and the set of solutions.     This theorem is very easy to prove when one translates the matrix equation into the linear system. We demonstrate this through working out examples.   Case 1. of   For and Here is so and . There are exactly basic variables so that . The fact that shows us that we are in Case (1) of so there are no solutions. Indeed, the linear equations become It is the last equation that causes problems and shows no solution exists. The easiest way to tell if you are in Case 1. of is to see if there are any zero rows in . If there are, for there to be a solution the corresponding row of must also be zero.  Note that in this example if we replaced with then we would be in the setting of Case (2) and there would be a unique solution      Case 2. of   In the case of a square matrix one can hope that the reduced row echelon form is the identity matrix. Indeed, for and the solution is simply .     Case 3. of   For Case 3. of , consider with The free variables for the equation are and while the basic variables are and . then says there is a three dimensional parametrization of the solution given by This solution can be verified easily, but it is motivated by considering the linear system of three equations The parametrization is defined through solving these equations by rewriting them as putting the basic variables on the left and free variables on the right. Letting the free variables be gives the parametrization (notice does not show up in the equations, but is still free to vary).      Row Reduction  Now that we can solve some matrix equations of a particularly nice form, our task is to put any matrix equation in that form. This technique is known as row reduction or alternatively, Gaussian elimination.  For the moment, let us represent our matrix as a column of row vectors To manipulate , we allow ourselves three types of operations:    Type I Switch the -th row and the -th row     Type II Multiply the -th row by a non-zero scalar     Type III Add any scalar multiple of the -th row to the -th row    It is important to note a fact concerning these row operations:    Fact Each step may be reversed through another elementary row operation. More precisely, for the Type I operation, simply repeat the same operation and you return to the original matrix. For Type II operations, multiply the same row by the reciprocal (which you can do because ). For Type III add to the -th row.   We will see this fact in another light in our next section on matrices.    Every matrix can be put in reduced row echelon form through applying a sequence of elementary row operations.    To see that this is the case, we argue by induction. More precisely, we will show that (a) we can put an matrix in reduced row echelon form and (b) if we can put an matrix in reduced row echelon form with elementary row operations, then we can do so with an matrix.  To accomplish step (a), suppose is an matrix. If for all then is in reduced row echelon form already. Otherwise, choose the smallest for which is non-zero. Using a Type I row operation, switch the -th row with the first row. Call this matrix . Now and we may use a Type II row operation to multiply the first row by to obtain a matrix of the form Finally, use Type III row operations to clear out the lower entries by adding times the first row to the -th row for each . This gives the matrix which is in reduced row echelon form.  Often in induction proofs, step (a) (called the base case) is trivial and the hard part is step (b) (called the induction step). In this proof though, step (a) is really where we learn our algorithm and step (b) is just a rehash of (a). Indeed, if we know that we can put an matrix in reduced row echelon form and is an matrix then we can put the submatrix of consisting of the first columns in reduced echelon form with elementary row operations while ignoring the last column. What we will be left with is a matrix Here, we assume all the rows up to the -th row of the submatrix are non-zero, and from the -th down are zero. But then apply part (a) of the argument to the last part of the last column Since the columns before this are all zero (for the affected rows), there is no effect on the left hand side. If there's a non-zero entry of the above vector we obtain a matrix of the form Adding multiples of the -th row to the -th row puts this final matrix into reduced row echelon form.    The proof of provides the algorithm to row reduce a matrix. Start at the first column and perform row operations (on the whole matrix) to get it into the form of equation . Then proceed left to right, column by column, as in the proof of part (b).  To solve a linear system using this algorithm, it pays to augment the matrix with the constant vector . In other words, row reduce the matrix but perform the row operations on the larger matrix In the end, obtain the augmented matrix where is in reduced row echelon form. As you will show in the exercises, our original equation is then equivalent to the new equation We see this procedure in an example.   Row reduction of a matrix   Let Then we make the augmented matrix and row reduce as follows: Now we can write the reduced row echelon system of equations as So we have one free variable and our general solution is    Of course, as row reduction is a very explicit computational algorithm, every linear algebra library for a given programming language has a method that will perform this automatically. In Sage (and Matlab), this is the .rref() command which procedes the matrix. We can also take a matrix and augment it by using the method .augment(b) . Let's see how this works with the last example.   It is certainly a helpful check to follow up a hand calculation with the computer version to find the inevitable errors that occur. We end this section with a little bit of vocabulary.     free and basic columns    Given a matrix with reduced row echelon form , we say that the -th column is free if the variable associated to a linear system is free. Otherwise we say the column is basic .    It is a bit unusual to call columns free and basic rather than variables, but these terms make discussing matrix equations more fluid.    Using elementary row operations, convert the matrix into reduced row echelon form. Show each step.           Give the general solution, if it exists, for the matrix equations.             Let be a matrix, its reduced echelon form, an augmented matrix and the augmented matrix obtained by row reducing . Explain why every solution to the row reduced matrix equation is also a solution to the original equation     "
},
{
  "id": "exa-linsys1",
  "level": "2",
  "url": "sec-matrices2.html#exa-linsys1",
  "type": "Example",
  "number": "2.4.1",
  "title": "Overdetermined systems.",
  "body": " Overdetermined systems   Let and Then our system of equations is in fact three equations of two variables The first and the third equation tell us that any solution must have and both equal to . But the second equation then would imply , which does not make sense here on earth. So for this example there are no solutions ! This case where the number of equations exceeds the number of variables is called an overdetermined system of linear equations. For these, it is often the case that no solution exists (although there certainly are exceptions!).   "
},
{
  "id": "exa-linsys2",
  "level": "2",
  "url": "sec-matrices2.html#exa-linsys2",
  "type": "Example",
  "number": "2.4.2",
  "title": "Underdetermined systems.",
  "body": " Underdetermined systems   Let and Now our system of equations is two equations of three variables Now, playing around a little with these equations, it may occur to you that, for any number , the equations give a solution. So for this example there are an infinite number of solutions ! In fact, we can consider the function as a parametrization of all solutions. This case where the number of equations is less than the number of variables is called an underdetermined system of linear equations. For these, it is often the case that an infinite number of solutions exist (although there are cases when none exist at all!).   "
},
{
  "id": "example-31",
  "level": "2",
  "url": "sec-matrices2.html#example-31",
  "type": "Example",
  "number": "2.4.3",
  "title": "Systems with unique solutions.",
  "body": " Systems with unique solutions   For this final example we will cut off the last column of the previous example's matrix (called taking a submatrix). So we consider and keep giving two equations in two variables Notice that the second equation fully specifies , so substituting into the first and solving gives . So is the only solution. In this case, a solution exists and it is unique .   "
},
{
  "id": "p-205",
  "level": "2",
  "url": "sec-matrices2.html#p-205",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "row reduction Gaussian elimination "
},
{
  "id": "def-rowechelonform",
  "level": "2",
  "url": "sec-matrices2.html#def-rowechelonform",
  "type": "Definition",
  "number": "2.4.4",
  "title": "",
  "body": "   row echelon form of a matrix    An matrix is in row echelon form if no zero row has a non-zero row below it and the first nonzero entry of any row has only zero entries to the left and below its own position (i.e. to its southwest).   "
},
{
  "id": "p-208",
  "level": "2",
  "url": "sec-matrices2.html#p-208",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "leading coefficient pivot "
},
{
  "id": "exa-rowechelon",
  "level": "2",
  "url": "sec-matrices2.html#exa-rowechelon",
  "type": "Example",
  "number": "2.4.5",
  "title": "Examples of row echelon form matrices.",
  "body": " Examples of row echelon form matrices   Here are some matrices in row echelon form: And here are some that are not To see why the second set of matrices are not in row echelon form, let's look at each in turn. The first non-example we see that below and to the left of are nonzero entries . In the second case, we see that below the -entry is . In the last case, even though the -entry is not directly below a leading coefficient, it is to the left and below the leading coefficient in the -position, disqualifying this matrix from being in row echelon form.   "
},
{
  "id": "p-210",
  "level": "2",
  "url": "sec-matrices2.html#p-210",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "reduced row echelon form "
},
{
  "id": "def-basicfree",
  "level": "2",
  "url": "sec-matrices2.html#def-basicfree",
  "type": "Definition",
  "number": "2.4.6",
  "title": "",
  "body": "   basic and free variables    Let be a matrix in row echelon form and the column of variables from equation . We say that the variable is a basic variable if there is a leading coefficient of some row of on the -th column. Otherwise we call it a free variable .   "
},
{
  "id": "thm-rowechsolution",
  "level": "2",
  "url": "sec-matrices2.html#thm-rowechsolution",
  "type": "Theorem",
  "number": "2.4.7",
  "title": "",
  "body": "  Let be an matrix in reduced row echelon form with free variables with indices and basic variables with indices . Then for the equation   There are no solutions if and only if and for some .  If we are not in case (1), the vector is a solution and is unique if .  If we are not in case (1) and , then for any define the function by For in take Then is a one-to-one correspondence between and the set of solutions.    "
},
{
  "id": "example-33",
  "level": "2",
  "url": "sec-matrices2.html#example-33",
  "type": "Example",
  "number": "2.4.8",
  "title": "Case 1. of Theorem 2.4.7.",
  "body": " Case 1. of   For and Here is so and . There are exactly basic variables so that . The fact that shows us that we are in Case (1) of so there are no solutions. Indeed, the linear equations become It is the last equation that causes problems and shows no solution exists. The easiest way to tell if you are in Case 1. of is to see if there are any zero rows in . If there are, for there to be a solution the corresponding row of must also be zero.  Note that in this example if we replaced with then we would be in the setting of Case (2) and there would be a unique solution    "
},
{
  "id": "example-34",
  "level": "2",
  "url": "sec-matrices2.html#example-34",
  "type": "Example",
  "number": "2.4.9",
  "title": "Case 2. of Theorem 2.4.7.",
  "body": " Case 2. of   In the case of a square matrix one can hope that the reduced row echelon form is the identity matrix. Indeed, for and the solution is simply .   "
},
{
  "id": "example-35",
  "level": "2",
  "url": "sec-matrices2.html#example-35",
  "type": "Example",
  "number": "2.4.10",
  "title": "Case 3. of Theorem 2.4.7.",
  "body": " Case 3. of   For Case 3. of , consider with The free variables for the equation are and while the basic variables are and . then says there is a three dimensional parametrization of the solution given by This solution can be verified easily, but it is motivated by considering the linear system of three equations The parametrization is defined through solving these equations by rewriting them as putting the basic variables on the left and free variables on the right. Letting the free variables be gives the parametrization (notice does not show up in the equations, but is still free to vary).   "
},
{
  "id": "thm-rowreduction",
  "level": "2",
  "url": "sec-matrices2.html#thm-rowreduction",
  "type": "Theorem",
  "number": "2.4.11",
  "title": "",
  "body": "  Every matrix can be put in reduced row echelon form through applying a sequence of elementary row operations.    To see that this is the case, we argue by induction. More precisely, we will show that (a) we can put an matrix in reduced row echelon form and (b) if we can put an matrix in reduced row echelon form with elementary row operations, then we can do so with an matrix.  To accomplish step (a), suppose is an matrix. If for all then is in reduced row echelon form already. Otherwise, choose the smallest for which is non-zero. Using a Type I row operation, switch the -th row with the first row. Call this matrix . Now and we may use a Type II row operation to multiply the first row by to obtain a matrix of the form Finally, use Type III row operations to clear out the lower entries by adding times the first row to the -th row for each . This gives the matrix which is in reduced row echelon form.  Often in induction proofs, step (a) (called the base case) is trivial and the hard part is step (b) (called the induction step). In this proof though, step (a) is really where we learn our algorithm and step (b) is just a rehash of (a). Indeed, if we know that we can put an matrix in reduced row echelon form and is an matrix then we can put the submatrix of consisting of the first columns in reduced echelon form with elementary row operations while ignoring the last column. What we will be left with is a matrix Here, we assume all the rows up to the -th row of the submatrix are non-zero, and from the -th down are zero. But then apply part (a) of the argument to the last part of the last column Since the columns before this are all zero (for the affected rows), there is no effect on the left hand side. If there's a non-zero entry of the above vector we obtain a matrix of the form Adding multiples of the -th row to the -th row puts this final matrix into reduced row echelon form.   "
},
{
  "id": "example-36",
  "level": "2",
  "url": "sec-matrices2.html#example-36",
  "type": "Example",
  "number": "2.4.12",
  "title": "Row reduction of a matrix.",
  "body": " Row reduction of a matrix   Let Then we make the augmented matrix and row reduce as follows: Now we can write the reduced row echelon system of equations as So we have one free variable and our general solution is   "
},
{
  "id": "def-basicfreecol",
  "level": "2",
  "url": "sec-matrices2.html#def-basicfreecol",
  "type": "Definition",
  "number": "2.4.13",
  "title": "",
  "body": "   free and basic columns    Given a matrix with reduced row echelon form , we say that the -th column is free if the variable associated to a linear system is free. Otherwise we say the column is basic .   "
},
{
  "id": "exe-matricestoechelon",
  "level": "2",
  "url": "sec-matrices2.html#exe-matricestoechelon",
  "type": "Exercise",
  "number": "2.4.3.1",
  "title": "",
  "body": "Using elementary row operations, convert the matrix into reduced row echelon form. Show each step.          "
},
{
  "id": "exercise-36",
  "level": "2",
  "url": "sec-matrices2.html#exercise-36",
  "type": "Exercise",
  "number": "2.4.3.2",
  "title": "",
  "body": "Give the general solution, if it exists, for the matrix equations.           "
},
{
  "id": "exercise-37",
  "level": "2",
  "url": "sec-matrices2.html#exercise-37",
  "type": "Exercise",
  "number": "2.4.3.3",
  "title": "",
  "body": " Let be a matrix, its reduced echelon form, an augmented matrix and the augmented matrix obtained by row reducing . Explain why every solution to the row reduced matrix equation is also a solution to the original equation   "
},
{
  "id": "sec-vectorspaces2",
  "level": "1",
  "url": "sec-vectorspaces2.html",
  "type": "Section",
  "number": "2.5",
  "title": "Vector Spaces II",
  "body": " Vector Spaces II   In our first section on vector spaces, we introduced the very important notion of a basis. However, we would also like to discuss subspaces of a vector space and give coordinates on them. This is the concept of linear independence which will be introduced in the first subsection. This concept then is used to define the dimension of a vector space. We then discuss the annihilator of a vector subspace which appears in the dual space.    Independence and Dimension  For that we need the following definition.     linearly independent vectors    Let be a vector space over . We say that the vectors are linearly independent if the equality implies that are all zero.    The equation in is called a linear relation . So an alternative way of saying that the vectors are linearly independent is that there is no non-trivial linear relation. Yet another way of expressing linear independence is given in the following proposition which the reader can check.    A set of vectors is linearly independent if and only if they form a basis of their span.    One practical reason to want a linearly independent set of vectors is to parameterize (or give coordinates to) their span. Indeed, if is an ordered set of vectors in , then define the function by  Then a third way of expressing linear independence can be given as follows.    The set of vectors is linearly independent if and only if is one-to-one.    Note that if is also a basis of (i.e. it spans all of ), then is the inverse function to .  There are instances when it is nice to be able to parameterize lines, planes and higher dimensional subspaces in a given vector space, and can often be used for this purpose. But to do this in , one must first see that a given set of column vectors is linearly independent.    Suppose are column vectors in . They are linearly independent if and only if the matrix has no free columns.    To see this, just recall from the fact that any linear combination of the 's can be written as the product In particular, the numbers give a linear relation if and only if they solve the matrix equation But Case (2) says that the solution is unique if and only if there are no free variables of the reduced row echelon equation . This implies there are no free columns of .    , along with row reduction, gives a computational way to check linear independence.   Testing linear independence by solving a matrix equation   Let us see whether the vectors are linearly independent or not. We compute the reduced row echelon form to see if every column is basic: We can see that the third column gives a free variable so our set is not linearly independent (also called linearly dependent ).  However, by simply forgetting about the third vector (or column in the computation) we see that the first two vectors  are linearly independent. Being linearly independent depends heavily on the collection of vectors you are considering.      If are linearly independent vectors in , then .    By there have to be no free columns of the matrix Suppose is the matrix in reduced row echelon form. Then has a leading coefficient in every column (otherwise that column corresponds to a free variable). But this gives at least leading coefficients for unique rows. So the number of rows must be at least or, in other words, .    Another important application of leads directly to the definition of dimension.    If is a vector space over , then any two bases of have the same number of elements.    Suppose has bases and . Then by exercise , we have that there are isomorphisms Now, since is a basis, it is a linearly independent set. And since is one-to-one, the vectors must also be linearly independent (why?). But by the previous corollary, this implies that . Using the same argument of the vectors in shows that . Together this gives .    This tells us that, while there are infinitely many bases of a vector space, all of them have the same number of vectors in them. This allows us to make the following definition.     dimension of a vector space    Given a vector space over , we say that the dimension of is if there is a basis of with elements. This is denoted . If has no finite basis, we say that is infinite dimensional.    We record a nice fact that uses our knowledge of linear independence.    If is a proper vector subspace of a finite dimensional space then is finite dimensional and .    Suppose is dimensional. Then by and the argument above, any linearly independent set in has at most vectors. Let be a set of linearly independent vectors in of maximal size. Then we contend that is a basis of . If not, then there is a which is not in the span of . But then we see that is also linearly independent (why?). This contradiction shows that must have a basis.  Now, as is a proper subspace of , there is a vector of which is not in . But then, for the same reason as above, the set must be linearly independent. By , this means which implies .    Instead of considering linear independence of rows and columns, we can focus on the span of the rows and\/or columns.    and  column and row space of a matrix    Given an matrix with entries in ,  the column space of is the span of the columns of in .  the row space of is the span of the rows of in .      Note that Example shows that the column space is equal to the image of the linear transformation obtained by left multiplying a column vector in by while the row space is the image of right multiplying a row vector in . The following proposition gives bases for both of these spaces.    Let be an matrix and its reduced row echelon form. Suppose are the basic columns of , and are the first rows of . Then is a basis for the column space of and is a basis for the row space of .    To see that is a basis, note that it is linearly independent by . Indeed, the reduced row echelon form of the matrix with only these columns is the same as the submatrix of with only these columns. In particular, it has no free columns and the cited proposition implies that is linearly independent. On the other hand, adding any other column of to fails the test in for the same reason. But that means that any other column can be written as a linear combination of the columns in (why?). Thus spans the column space and is linearly independent. By , is a basis for the column space.  For the row space, we note that all of the row vectors of are linear combinations of the rows in because row operations create rows that are linear combinations of the existing rows. Also, since row operations are reversible (in other words, can be recovered by performing row operations on ), every row of is a linear combination of those in . This implies the span of is the row space (why?). On the other hand, if is a linear combination, then projecting to the basic columns, we have the vector This is because the coordinate of in the column is and is zero for all other columns (because is in reduced row echelon form). Thus the linear combination is the zero vector only if all are zero, meaning is linearly independent. Again by we have that is a basis.    We note here that the bases for the column and row spaces have the same number of vectors! This motivates the following definition.     rank of a matrix   The rank of is the dimension of the row space of , or equivalently, the dimension of the column space of .   The student should now be able to understand some of jargin in the Sage description of vector subspaces. Indeed, the methods .row_space() and .column_space() can be used to define the row and column space of a matrix.   The degree in this description is the dimension of the ambient space (i.e. the number of columns), and the rank is the dimension of the row space. Indeed, using the method .dimension() the following code checks that the rank of also equals the dimension of the column space.     Annihilators  In the previous section on vector spaces, we defined the dual space of a vector space . This construction can be extended to vector subspaces. Furthermore, there is a new notion that can be given.     annihilator of a subspace    Given a vector subspace the annihilator of is the subspace,     This construction satisfies some basic properties.    Suppose are two vector subspaces of an -dimensional space . Then     .     For the first two statements, let be a basis for such that is a basis of . Then it is an exercise to see that is a basis of . This shows the first statement and the second follows from repeating the argument with the dual basis and observing that .  For the second statement then for any we have since . Thus .      Implicit equations for planes in with coordinates are of the form where and are real numbers. If the plane is a vector subspace of . For each of the following planes, find a basis and give a parameterization defined by .        Prove .    For each matrix in , give a basis for the row space and a basis for the column space. What are the ranks of these matrices?    Using , explain why you need only one linear equation to describe a plane in but two linear equations to describe a line.    "
},
{
  "id": "def-linearindependent",
  "level": "2",
  "url": "sec-vectorspaces2.html#def-linearindependent",
  "type": "Definition",
  "number": "2.5.1",
  "title": "",
  "body": "   linearly independent vectors    Let be a vector space over . We say that the vectors are linearly independent if the equality implies that are all zero.   "
},
{
  "id": "p-249",
  "level": "2",
  "url": "sec-vectorspaces2.html#p-249",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "linear relation "
},
{
  "id": "prop-basisindspan",
  "level": "2",
  "url": "sec-vectorspaces2.html#prop-basisindspan",
  "type": "Proposition",
  "number": "2.5.2",
  "title": "",
  "body": "  A set of vectors is linearly independent if and only if they form a basis of their span.   "
},
{
  "id": "proposition-7",
  "level": "2",
  "url": "sec-vectorspaces2.html#proposition-7",
  "type": "Proposition",
  "number": "2.5.3",
  "title": "",
  "body": "  The set of vectors is linearly independent if and only if is one-to-one.   "
},
{
  "id": "prop-computelinind",
  "level": "2",
  "url": "sec-vectorspaces2.html#prop-computelinind",
  "type": "Proposition",
  "number": "2.5.4",
  "title": "",
  "body": "  Suppose are column vectors in . They are linearly independent if and only if the matrix has no free columns.    To see this, just recall from the fact that any linear combination of the 's can be written as the product In particular, the numbers give a linear relation if and only if they solve the matrix equation But Case (2) says that the solution is unique if and only if there are no free variables of the reduced row echelon equation . This implies there are no free columns of .   "
},
{
  "id": "exa-lineardep",
  "level": "2",
  "url": "sec-vectorspaces2.html#exa-lineardep",
  "type": "Example",
  "number": "2.5.5",
  "title": "Testing linear independence by solving a matrix equation.",
  "body": " Testing linear independence by solving a matrix equation   Let us see whether the vectors are linearly independent or not. We compute the reduced row echelon form to see if every column is basic: We can see that the third column gives a free variable so our set is not linearly independent (also called linearly dependent ).  However, by simply forgetting about the third vector (or column in the computation) we see that the first two vectors  are linearly independent. Being linearly independent depends heavily on the collection of vectors you are considering.   "
},
{
  "id": "cor-linindmatsize",
  "level": "2",
  "url": "sec-vectorspaces2.html#cor-linindmatsize",
  "type": "Corollary",
  "number": "2.5.6",
  "title": "",
  "body": "  If are linearly independent vectors in , then .    By there have to be no free columns of the matrix Suppose is the matrix in reduced row echelon form. Then has a leading coefficient in every column (otherwise that column corresponds to a free variable). But this gives at least leading coefficients for unique rows. So the number of rows must be at least or, in other words, .   "
},
{
  "id": "corollary-2",
  "level": "2",
  "url": "sec-vectorspaces2.html#corollary-2",
  "type": "Corollary",
  "number": "2.5.7",
  "title": "",
  "body": "  If is a vector space over , then any two bases of have the same number of elements.    Suppose has bases and . Then by exercise , we have that there are isomorphisms Now, since is a basis, it is a linearly independent set. And since is one-to-one, the vectors must also be linearly independent (why?). But by the previous corollary, this implies that . Using the same argument of the vectors in shows that . Together this gives .   "
},
{
  "id": "def-dimension",
  "level": "2",
  "url": "sec-vectorspaces2.html#def-dimension",
  "type": "Definition",
  "number": "2.5.8",
  "title": "",
  "body": "   dimension of a vector space    Given a vector space over , we say that the dimension of is if there is a basis of with elements. This is denoted . If has no finite basis, we say that is infinite dimensional.   "
},
{
  "id": "cor-strictinequalitysubspace",
  "level": "2",
  "url": "sec-vectorspaces2.html#cor-strictinequalitysubspace",
  "type": "Corollary",
  "number": "2.5.9",
  "title": "",
  "body": "  If is a proper vector subspace of a finite dimensional space then is finite dimensional and .    Suppose is dimensional. Then by and the argument above, any linearly independent set in has at most vectors. Let be a set of linearly independent vectors in of maximal size. Then we contend that is a basis of . If not, then there is a which is not in the span of . But then we see that is also linearly independent (why?). This contradiction shows that must have a basis.  Now, as is a proper subspace of , there is a vector of which is not in . But then, for the same reason as above, the set must be linearly independent. By , this means which implies .   "
},
{
  "id": "def-rowcolspace",
  "level": "2",
  "url": "sec-vectorspaces2.html#def-rowcolspace",
  "type": "Definition",
  "number": "2.5.10",
  "title": "",
  "body": "  and  column and row space of a matrix    Given an matrix with entries in ,  the column space of is the span of the columns of in .  the row space of is the span of the rows of in .     "
},
{
  "id": "prop-basescolrow",
  "level": "2",
  "url": "sec-vectorspaces2.html#prop-basescolrow",
  "type": "Proposition",
  "number": "2.5.11",
  "title": "",
  "body": "  Let be an matrix and its reduced row echelon form. Suppose are the basic columns of , and are the first rows of . Then is a basis for the column space of and is a basis for the row space of .    To see that is a basis, note that it is linearly independent by . Indeed, the reduced row echelon form of the matrix with only these columns is the same as the submatrix of with only these columns. In particular, it has no free columns and the cited proposition implies that is linearly independent. On the other hand, adding any other column of to fails the test in for the same reason. But that means that any other column can be written as a linear combination of the columns in (why?). Thus spans the column space and is linearly independent. By , is a basis for the column space.  For the row space, we note that all of the row vectors of are linear combinations of the rows in because row operations create rows that are linear combinations of the existing rows. Also, since row operations are reversible (in other words, can be recovered by performing row operations on ), every row of is a linear combination of those in . This implies the span of is the row space (why?). On the other hand, if is a linear combination, then projecting to the basic columns, we have the vector This is because the coordinate of in the column is and is zero for all other columns (because is in reduced row echelon form). Thus the linear combination is the zero vector only if all are zero, meaning is linearly independent. Again by we have that is a basis.   "
},
{
  "id": "definition-23",
  "level": "2",
  "url": "sec-vectorspaces2.html#definition-23",
  "type": "Definition",
  "number": "2.5.12",
  "title": "",
  "body": "   rank of a matrix   The rank of is the dimension of the row space of , or equivalently, the dimension of the column space of .  "
},
{
  "id": "definition-24",
  "level": "2",
  "url": "sec-vectorspaces2.html#definition-24",
  "type": "Definition",
  "number": "2.5.13",
  "title": "",
  "body": "   annihilator of a subspace    Given a vector subspace the annihilator of is the subspace,    "
},
{
  "id": "prop-annihilatorcontra",
  "level": "2",
  "url": "sec-vectorspaces2.html#prop-annihilatorcontra",
  "type": "Proposition",
  "number": "2.5.14",
  "title": "",
  "body": "  Suppose are two vector subspaces of an -dimensional space . Then     .     For the first two statements, let be a basis for such that is a basis of . Then it is an exercise to see that is a basis of . This shows the first statement and the second follows from repeating the argument with the dual basis and observing that .  For the second statement then for any we have since . Thus .   "
},
{
  "id": "exe-planesfromequations",
  "level": "2",
  "url": "sec-vectorspaces2.html#exe-planesfromequations",
  "type": "Exercise",
  "number": "2.5.3.1",
  "title": "",
  "body": "Implicit equations for planes in with coordinates are of the form where and are real numbers. If the plane is a vector subspace of . For each of the following planes, find a basis and give a parameterization defined by .      "
},
{
  "id": "exercise-39",
  "level": "2",
  "url": "sec-vectorspaces2.html#exercise-39",
  "type": "Exercise",
  "number": "2.5.3.2",
  "title": "",
  "body": " Prove .  "
},
{
  "id": "exercise-40",
  "level": "2",
  "url": "sec-vectorspaces2.html#exercise-40",
  "type": "Exercise",
  "number": "2.5.3.3",
  "title": "",
  "body": " For each matrix in , give a basis for the row space and a basis for the column space. What are the ranks of these matrices?  "
},
{
  "id": "exercise-41",
  "level": "2",
  "url": "sec-vectorspaces2.html#exercise-41",
  "type": "Exercise",
  "number": "2.5.3.4",
  "title": "",
  "body": " Using , explain why you need only one linear equation to describe a plane in but two linear equations to describe a line.  "
},
{
  "id": "sec-lineartransformations2",
  "level": "1",
  "url": "sec-lineartransformations2.html",
  "type": "Section",
  "number": "2.6",
  "title": "Linear Transformations II",
  "body": " Linear Transformations II  In we saw that an arbitrary matrix equations could be solved completely through putting the matrix into reduced echelon form. As we will now see, for vector spaces with chosen bases, we can write any abstract linear transformation between them as a matrix, and leverage our knowledge of matrix equations to better understand the transformations. This also has a tremendous computational advantage in that we can then parametrize all types of linear structures with linear (or more generally affine) transformations.  Suppose and are vector spaces over and are bases of and respectively. Finally, suppose that is a linear transformation. Then for any , we have that is a vector in and can thus be written uniquely as a linear combination of basis vectors in . We write such a combination out here Notice that this gives us scalars for all and which we can place in an matrix   This matrix is called the matrix representation of T . While this may certainly seem like awkward notation, it aligns well with what is known as `tensor notation', commonly used in various branches of physics. What is important though is that it encodes all of the needed data (the transformation and the bases and ). But how is this matrix used to compute with ? Well, we have not used that is a basis yet, so let's do that. We know that \\text{any} vector in has a unique expression as We can feed this into the transformation and use linearity to see The coefficients of the vectors may look familiar, because they were the coordinates from the formula for matrix multiplication in equation . In fact, we can write this observation as an important equation Alternatively, we can give the elegant definition While important, it is easy to relate to a student who sees this equation as confusing gibberish. So we shall tilt our heads for the moment and understand it from the perspective of the diagram   You should look at this diagram in the following way. What we are interested in is the linear transformation from to , so the top row of the diagram is what we care about. But it is abstract and difficult to compute with, so we consider the linear isomorphisms and that place coordinates on and respectively and bring us down to earth on the bottom row of the diagram. Down here, and have been replaced with column vectors of numbers which we can manipulate with basic arithmetic. But equation tells us that we can also work with here as well! In particular, we can write as the concrete matrix of numbers and compute as matrix multiplication . Let's see this worked out in an example.   The matrix of a derivative   Consider as the polynomials of degree less than or equal to with coefficients in . Take to be the linear transformation obtained by taking the derivative. In other words, In order to write out as a matrix, we need to choose bases for and . The natural candidate for is , so we take To find we will simply need to find the coefficients from equation . In other words, we need to take the derivative of our polynomials from and write them out as linear combinations of the polynomials in . Placing these coefficients into the matrix (appropriately!) gives Of course, in this example, since we all know how to take derivatives, the matrix representation of is of limited usefulness. Nonetheless, let us show how equation works in this case. Take the arbitrary quadratic polynomial in and observe that Then multiplying this column vector on the left by gives But this vector represents the element which we all know as the derivative of .    The technique of representing a linear transformation as a matrix already gives us some important results. First though, we define the following notions.     the rank and nullity of a linear transformation   If and are finite dimensional vector spaces over , the rank of a linear transformation , denoted , is the dimension of . The nullity of is the dimension of .   The following theorem gives us a good amount of qualitative information about a linear transformation.   Rank-Nullity Theorem  If and are finite dimensional vector spaces over and linear transformation then    To see this, suppose , and let be the matrix representing relative to some bases on and . Then the kernel of is isomorphic to the null space of (which is the kernel of multiplying by ) and the image of is isomorphic to the column space of (which is the image of multiplying by ). Now, the null space of is the linear subspace of solutions to the matrix equation We saw in that the solutions to these equations were parameterized by where was the number of free columns of . So the nullity of is precisely . On the other hand, showed that the dimension of the column space equaled the number of basic columns of . Now every column of is either free or basic (but not both), so the sum of these two numbers is precisely .    From this we obtain the corollary    Suppose and are finite dimensional vector spaces over and is a linear transformation. Then  if is one-to-one then .  if is onto then .  if is a linear isomorphism then .      For the first claim, represent by a matrix and apply . For the second, if is onto then then so that . By , implying . The last claim follows from the fact that a linear isomorphism is a one-to-one correspondence by definition.    We also can use our theorem to make it easier to detect linear isomorphisms.    If and are finite dimensional vector spaces of the same dimension and is a linear transformation, then the following are equivalent:   is one-to-one.   is onto.   is a linear isomorphism.      Note that is one-to-one if and only if which by holds if and only if . But then since otherwise would be a proper subspace of and would give that . Thus is onto and a linear isomorphism.  Now, if is onto then which again implies by that . This would give that so that is one-to-one and a linear isomorphism.  Clearly, if is a linear isomorphism then it is both one-to-one and onto by definition.    The ability to represent a linear transformation as a matrix is especially important when we consider linear transformations from a vector space to itself In this case, we need only choose one basis of to get a matrix representation because the domain and the codomain are equal. However, if we chose a different basis , it would be good to know how to change this matrix to obtain the matrix representation In fact, it is a nice exercise to show that one can do this with the following invertible matrix by using the simple matrix equation The matrix called a change of basis matrix from to and it allows us to transfer information relative to the basis to that of (and upon taking its inverse, vice versa).    Using the standard basis , represent the linear transformation of the plane which rotates the plane by counter-clockwise rotation of and then reflects over the -axis.  To do this, just ask yourself where the two basis vectors are sent and write the results as the columns of your matrix.  Suppose is represented by the matrix . Show that   if is one-to-one then multiplication by is one-to-one.   if is onto then multiplication by is onto.   the dimension of equals the dimension of the null space of (which is the solution space to ).   there is a linear isomorphism from the image of to the column space of .  Consider using where is the basis for used in the representation .  Let be the real vector space of polynomials of degree or less. Let and . As in the example, let be the derivative. Calculate   ,   .   Expanding out functions in the basis of versus can be thought of as taking second order approximations to functions near instead of (i.e. examining the first three terms of the Taylor series near different points).    Use equation to show that if and are linear transformations and and are bases for and respectively, then     Use to verify equation .    "
},
{
  "id": "p-295",
  "level": "2",
  "url": "sec-lineartransformations2.html#p-295",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "the matrix representation of T "
},
{
  "id": "example-38",
  "level": "2",
  "url": "sec-lineartransformations2.html#example-38",
  "type": "Example",
  "number": "2.6.1",
  "title": "The matrix of a derivative.",
  "body": " The matrix of a derivative   Consider as the polynomials of degree less than or equal to with coefficients in . Take to be the linear transformation obtained by taking the derivative. In other words, In order to write out as a matrix, we need to choose bases for and . The natural candidate for is , so we take To find we will simply need to find the coefficients from equation . In other words, we need to take the derivative of our polynomials from and write them out as linear combinations of the polynomials in . Placing these coefficients into the matrix (appropriately!) gives Of course, in this example, since we all know how to take derivatives, the matrix representation of is of limited usefulness. Nonetheless, let us show how equation works in this case. Take the arbitrary quadratic polynomial in and observe that Then multiplying this column vector on the left by gives But this vector represents the element which we all know as the derivative of .   "
},
{
  "id": "def-rank",
  "level": "2",
  "url": "sec-lineartransformations2.html#def-rank",
  "type": "Definition",
  "number": "2.6.2",
  "title": "",
  "body": "   the rank and nullity of a linear transformation   If and are finite dimensional vector spaces over , the rank of a linear transformation , denoted , is the dimension of . The nullity of is the dimension of .  "
},
{
  "id": "thm-ranknullity",
  "level": "2",
  "url": "sec-lineartransformations2.html#thm-ranknullity",
  "type": "Theorem",
  "number": "2.6.3",
  "title": "Rank-Nullity Theorem.",
  "body": " Rank-Nullity Theorem  If and are finite dimensional vector spaces over and linear transformation then    To see this, suppose , and let be the matrix representing relative to some bases on and . Then the kernel of is isomorphic to the null space of (which is the kernel of multiplying by ) and the image of is isomorphic to the column space of (which is the image of multiplying by ). Now, the null space of is the linear subspace of solutions to the matrix equation We saw in that the solutions to these equations were parameterized by where was the number of free columns of . So the nullity of is precisely . On the other hand, showed that the dimension of the column space equaled the number of basic columns of . Now every column of is either free or basic (but not both), so the sum of these two numbers is precisely .   "
},
{
  "id": "cor-dimensions",
  "level": "2",
  "url": "sec-lineartransformations2.html#cor-dimensions",
  "type": "Corollary",
  "number": "2.6.4",
  "title": "",
  "body": "  Suppose and are finite dimensional vector spaces over and is a linear transformation. Then  if is one-to-one then .  if is onto then .  if is a linear isomorphism then .      For the first claim, represent by a matrix and apply . For the second, if is onto then then so that . By , implying . The last claim follows from the fact that a linear isomorphism is a one-to-one correspondence by definition.   "
},
{
  "id": "cor-equaldim",
  "level": "2",
  "url": "sec-lineartransformations2.html#cor-equaldim",
  "type": "Corollary",
  "number": "2.6.5",
  "title": "",
  "body": "  If and are finite dimensional vector spaces of the same dimension and is a linear transformation, then the following are equivalent:   is one-to-one.   is onto.   is a linear isomorphism.      Note that is one-to-one if and only if which by holds if and only if . But then since otherwise would be a proper subspace of and would give that . Thus is onto and a linear isomorphism.  Now, if is onto then which again implies by that . This would give that so that is one-to-one and a linear isomorphism.  Clearly, if is a linear isomorphism then it is both one-to-one and onto by definition.   "
},
{
  "id": "p-309",
  "level": "2",
  "url": "sec-lineartransformations2.html#p-309",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "change of basis matrix "
},
{
  "id": "exercise-42",
  "level": "2",
  "url": "sec-lineartransformations2.html#exercise-42",
  "type": "Exercise",
  "number": "2.6.1",
  "title": "",
  "body": " Using the standard basis , represent the linear transformation of the plane which rotates the plane by counter-clockwise rotation of and then reflects over the -axis.  To do this, just ask yourself where the two basis vectors are sent and write the results as the columns of your matrix. "
},
{
  "id": "exe-matrep",
  "level": "2",
  "url": "sec-lineartransformations2.html#exe-matrep",
  "type": "Exercise",
  "number": "2.6.2",
  "title": "",
  "body": "Suppose is represented by the matrix . Show that   if is one-to-one then multiplication by is one-to-one.   if is onto then multiplication by is onto.   the dimension of equals the dimension of the null space of (which is the solution space to ).   there is a linear isomorphism from the image of to the column space of .  Consider using where is the basis for used in the representation . "
},
{
  "id": "exercise-44",
  "level": "2",
  "url": "sec-lineartransformations2.html#exercise-44",
  "type": "Exercise",
  "number": "2.6.3",
  "title": "",
  "body": "Let be the real vector space of polynomials of degree or less. Let and . As in the example, let be the derivative. Calculate   ,   .   Expanding out functions in the basis of versus can be thought of as taking second order approximations to functions near instead of (i.e. examining the first three terms of the Taylor series near different points).  "
},
{
  "id": "exe-compositionreps",
  "level": "2",
  "url": "sec-lineartransformations2.html#exe-compositionreps",
  "type": "Exercise",
  "number": "2.6.4",
  "title": "",
  "body": " Use equation to show that if and are linear transformations and and are bases for and respectively, then   "
},
{
  "id": "exe-changeofbasis",
  "level": "2",
  "url": "sec-lineartransformations2.html#exe-changeofbasis",
  "type": "Exercise",
  "number": "2.6.5",
  "title": "",
  "body": " Use to verify equation .  "
},
{
  "id": "sec-matrices3",
  "level": "1",
  "url": "sec-matrices3.html",
  "type": "Section",
  "number": "2.7",
  "title": "Matrices III",
  "body": " Matrices III   In this section on matrices, we will be primarily concerned with square matrices.     invertible matrix    A matrix is said to be invertible if it has it has a multiplicative inverse.    If is an matrix, then multiplication by gives a linear transformation Notice that represents relative to the standard bases so that shows that . This implies that is an invertible matrix if and only if is a linear isomorphism. In particular, says that this can only be the case if is a square matrix. We state this as a proposition for the record.    If a matrix is invertible, then it is a square matrix.    Of course, we can actually use our strong results to give a very concrete criterion for checking invertibility of a square matrix.    A square matrix is invertible if and only if its reduced row echelon form is the identity.    To see this, let be a square matrix. Then by  is invertible implies that multiplying by is a one-to-one operation. Conversely, if it is one-to-one, implies that onto as well and thus an isomorphism. This means that has the unique solution . But by , this only happens if there are no free columns of , implying that all columns are basic. So there are leading coefficients implying that there must be a leading coefficient on every row. But the only reduced row echelon square matrix of this type is the identity matrix (check this!).    In fact, using row reduction we can do much better than simply determining if a matrix is invertible. We can in fact compute the inverse. To do this, we simply augment our matrix on the right with the identity matrix and row reduce the left hand side. If our matrix is invertible, what we end up with on the right at the end of the row reduction process in fact the inverse!  Let us perform this exercise before showing why it works.   Computing the inverse with row reduction   Let us find the inverse of We augment and reduce One can easily check that the resulting matrix on the right satisfies verifying that it is the inverse of .    To understand why this process works, we observe that the process of row reduction itself is already matrix arithmetic.    Elementary Matrices  To each of the elementary row operations, we can construct an elementary square matrix. To write formula for these matrices, we will use the following notation. The matrix with -entry and all other entries will be denoted .    Type I This elementary matrix is obtained by switching two rows of the identity matrix. It can be written as To explain this equation, one sees that subtracting the first two matrices makes the and -th diagonal entries while adding the last two puts two off diagonal 's in the and spots.   Type II This elementary matrix is obtained by taking the identity matrix and replacing the -entry of with some non-zero constant .    Type III This elementary matrix is obtained by placing exactly one non-zero number in the -entry where giving    We record the following fact which can be checked by hand.    Performing a Type I, II or III elementary row operation on a matrix is equivalent to multiplying on the left by a Type I, II or III elementary matrix. Furthermore, each elementary matrix is invertible and    What we obtain from this viewpoint on row reduction along with our previous results is the following very nice proposition.    A matrix is invertible if and only if it is the product of elementary matrices.    Let be an matrix. We saw in that it is invertible if and only if its reduced row echelon form is the identity. We see from that this is the case if and only if there are elementary matrices so that But since every elementary matrix has inverse that is an elementary matrix, such an equation is possible if and only if     We also see from this proposition why our augmented matrix approach to computing inverse matrices works. As we row reduce , the augmented reduction of the identity is keeping track of the products of the elementary matrices . Thus when we are finished, on the right hand side we simply obtain the full product which is, by equation the inverse of .    Determinants  The first thing to understand about determinants is that, despite being included in every linear algebra course ever given, they really don't belong to the subject of linear algebra at all. Rather, they naturally sit in a subject known as multi-linear algebra. That is because they are, in fact, multi-linear functions, not linear functions. While no one should be worried, I say this only to warn the student that the determinant is not linear and may reasonably appear rather strange. In fact, it is helpful in this context to view an -matrix as a column of rows and if is a function on matrices, write This notation is much cleaner than writing out the matrix each time and we will use it frequently in this section.     row linear and alternating functions    Let be the set of all matrices with entries in . A function is called:   row linear if, keeping all rows except the -th row constant, is linear on the -th row (for any ). In other words if    alternating if reverses sign whenever two rows are switched. In other words      Now let us define the determinant.     determinant of a matrix    The determinant is the unique function which is row linear, alternating and satisfies .    Actually, this definition is also a theorem in the sense that it is saying both that such a function exists and that it is unique. Before showing either of these two facts, we mention an extremely important point.   While we define the determinant abstractly so that we may find many of its important properties, the determinant should be known as a way to correctly compute and work with volume in -dimensions . We will see this shortly in and dimensions. This is of particular importance when we consider integrals in higher dimensions.   Now we give the common inductive construction of the determinant. We do this in a step-by-step manner.    Step 1 Notice that the function given by satisfies the properties of .   Step 2 Now assume there is a function . If is an -matrix write for the -matrix obtained by forgetting the -th row and -th column. The - minor , denoted , is the . The - cofactor is simply .   Step 3 With this notation in mind, define    The following theorem establishes that this function is the determinant.    The function given is the unique function satisfying the properties of the determinant in . It is thus written as .    Repeating steps 1 through 3 will repeatedly will give a function from to . Before proving this theorem, let us use this procedure to make some computations and get a feel for it.   Determinants of matrices   For matrices, we can write down a simple formula which many of you already know. Take and observe that while . So     It is common in multivariable calculus courses to also learn the formula (or variants thereof) for matrices. For now, let us use the previous example and compute a numerical case.   Determinants of matrices   Finding the determinant of a involves finding three cofactors. Taking we can compute the minors , and using the formula in as Then our inductive formula gives In fact, there is a formula for determinants that, were one so inclined, could be memorized.     You might observe that the formula for determinants had two terms and had six. Were you to write out the formula for matrices, you'd find there are terms. In fact, the number of terms in the determinant is , which grows quite quickly. These formulas can be of great use to computers and humans alike for smaller matrices, but for large ones (which occur frequently in applications), they are much less helpful. Nevertheless, there are other ways to compute the determinant of a matrix (for example, it can be done by row reduction) that are faster. More importantly, what we learn by understanding the properties of the determinant gives us great insight into many linear algebra problems.    Proof of  Before verifying that this function satisfies the properties in , we give an alternative characterization of the alternating property.    A row linear function is alternating if and only if whenever has two identical rows.    Assume is alternating and has two identical rows. Then switching these rows still gives which implies or . Conversely, suppose is row linear and is zero whenever has two identical rows. Then Thus and is alternating.     Proof of the existence portion of  We will use induction on to show that satisfies the properties in .    Row Linear  To show row linearity, we notice that since is row linear, the cofactors are row linear. By this we mean that if we denote the rows of matrices as , then is row linear. This implies that the formula is row linear in the last rows. However, we can notice that this formula can also be written as the matrix product which is clearly linear in the first row.    Normalized  We call the property that a normalization property. To prove it, we can assume that it holds for . Now, notice that the minor while the minors has all zeros in the -st row. But if there is a row equal to zero, say , and is row linear, then So subtracting gives . Thus, since we have shown that is row linear, we have that the cofactors of the identity are for and otherwise. But then   Alternating  To show the alternating property, we may assume inductively that satisfies this property. This implies the cofactors are also alternating and in turn, switching any two of the last rows for does result in multiplying by . Thus, we need only show that if we switch with the first row then switches signs. Using the alternating property for the last rows, we may assume that . Furthermore, using the formula in we see that the alternating property holds for matrices, so we may assume . Finally, using row linearity, it suffices to show this property when and are standard basis row vectors.  In the case where , one sees that the minor is the of a matrix with first row zero. So by the argument given above in equation , we have . But as all other entries on the first row are zero, we then have so that switching the first two rows does act as multiplying the number by .  Now assume we have two distinct indices, and and take to be the submatrix of obtained by eliminating the first two rows and the -th and -the columns. A quick look shows then that if  Indeed, one must subtract from because, in the submatrix obtained by eliminating the first row and the -th column, the index of the entry goes down by one. On the other hand, this does not occur if we switch the order (again assuming ) so we get The difference in the sign justifies that switching the first two rows does indeed multiply the value of by .     Some comments on this proof are in order. First, we note that at this point, we have only shown that a function satisfying the properties exists, but not that there is only one. Second, we could have quite easily used the last row instead of the first row when defining the . In fact, we can use any row and write the formula This is still a valid formula and can be obtained by using the alternating property. Once we prove uniqueness, we see that each of these formulas yields the same number.  To see the uniqueness of the determinant, we return to our elementary matrices and row reduction.    If is a function satisfying the conditions of , then Furthermore, if is any square matrix and is any elementary matrix of the same size,     We leave it to the student to work out the first set of equations. For the second, notice that if is Type I then is just with two rows switched so by the alternating property and the first equation . On the other hand, if is Type II so that then multiplies the -th row by . So row linearity and the second equation gives . Finally, if is Type III and equals we have that the -th row of is . So using row linearity, , and the third equation we get     We may follow this lemma up with one of the most important results concerning the determinant.    Suppose satisfies the properties of . Then is invertible if and only if .    Let be the reduced row echelon form of so that there are elementary matrices so that Taking of both sides and repeatedly applying gives Noting that we also have By , is invertible if and only if . If this is the case, then the normalization property says the right hand side is . If not, then must have a row of zeros (because it is a square matrix) which implies by the argument in equation that . This proves the statement.    These two lemmas immediately give our uniqueness claim.   Proof of uniqueness of  If is not invertible, then we must have by . On the other hand, the proof of the same lemma showed that if is invertible, then for a collection of an elementary matrices which row reduce . However, shows that for elementary matrices , is determined by the properties of . Thus there is no choice in defining for an arbitrary .   From now on, we will just use instead of . We notice that the last proof also shows that if we row reduce a matrix, and keep track of our operations, we can compute the determinant. This is generally a quicker way to get determinants than using formulas for large matrices.  We end this section with a useful result concerning the determinant.    Given two matrices and then    If either or is not invertible, then is not invertible. Indeed, if were an inverse of then and would show that or had an inverse (here you would need to observe that, for square matrices, a left or right inverse is an inverse which follows from proven independently below). Thus in the non-invertible case both sides are zero. On the other hand, if and are invertible, then by , they are both products of elementary matrices So repeatedly using , we have       Formula for the Inverse  As a final result of this section, we note that the determinant also allows us to write out a formula for the inverse matrix when it exists. First we take the adjugate matrix of a square matrix (which is sometimes incorrectly referred to as the adjoint) as the transpose matrix of cofactors One notes that if we multiply on the left by the -th row of , we obtain the row vector (check this). But this implies that Of course, if , this may not give us much to work with when it comes to finding an inverse. But otherwise we would like to conclude that However, one might worry whether this really works, since we only have that is a right inverse in the equation above. Happily, there is a simple argument to show that left and right inverses of square matrices must be the same.    If is a right inverse or left inverse of a square matrix , then it is the inverse of .    Since is a square matrix, it represents a linear transformation from to . If it has a left inverse so that then that transformation is one-to-one. But by we have that this means it is an isomorphism. Thus it has an inverse linear transformation which can be represented by a two sided matrix inverse . But then since we may multiply on the right by and obtain . A similar argument applies for the right inverse.      Determine if the matrix is invertible using row reduction (augment with the identity). If it is, find the inverse.       Compute the determinants of the following matrices.             Verify the first three equations in .    Use to show that if is an invertible matrix then     Let be the a matrix. Consider the column vectors and in and write for the parallelogram in spanned by and (this is the parallelogram with sides , and their translations). Show that   First rotate and by multiplying by a rotation matrix so that is of the form . Use to show this won't change the determinant of and observe that this does not change the area of the parallelogram. However, the new area and determinant is easy to calculate and compare.    "
},
{
  "id": "def-invertible",
  "level": "2",
  "url": "sec-matrices3.html#def-invertible",
  "type": "Definition",
  "number": "2.7.1",
  "title": "",
  "body": "   invertible matrix    A matrix is said to be invertible if it has it has a multiplicative inverse.   "
},
{
  "id": "proposition-11",
  "level": "2",
  "url": "sec-matrices3.html#proposition-11",
  "type": "Proposition",
  "number": "2.7.2",
  "title": "",
  "body": "  If a matrix is invertible, then it is a square matrix.   "
},
{
  "id": "prop-invertiblecriterion1",
  "level": "2",
  "url": "sec-matrices3.html#prop-invertiblecriterion1",
  "type": "Proposition",
  "number": "2.7.3",
  "title": "",
  "body": "  A square matrix is invertible if and only if its reduced row echelon form is the identity.    To see this, let be a square matrix. Then by  is invertible implies that multiplying by is a one-to-one operation. Conversely, if it is one-to-one, implies that onto as well and thus an isomorphism. This means that has the unique solution . But by , this only happens if there are no free columns of , implying that all columns are basic. So there are leading coefficients implying that there must be a leading coefficient on every row. But the only reduced row echelon square matrix of this type is the identity matrix (check this!).   "
},
{
  "id": "example-39",
  "level": "2",
  "url": "sec-matrices3.html#example-39",
  "type": "Example",
  "number": "2.7.4",
  "title": "Computing the inverse with row reduction.",
  "body": " Computing the inverse with row reduction   Let us find the inverse of We augment and reduce One can easily check that the resulting matrix on the right satisfies verifying that it is the inverse of .   "
},
{
  "id": "prop-elrowelmat",
  "level": "2",
  "url": "sec-matrices3.html#prop-elrowelmat",
  "type": "Proposition",
  "number": "2.7.5",
  "title": "",
  "body": "  Performing a Type I, II or III elementary row operation on a matrix is equivalent to multiplying on the left by a Type I, II or III elementary matrix. Furthermore, each elementary matrix is invertible and   "
},
{
  "id": "prop-productofelem",
  "level": "2",
  "url": "sec-matrices3.html#prop-productofelem",
  "type": "Proposition",
  "number": "2.7.6",
  "title": "",
  "body": "  A matrix is invertible if and only if it is the product of elementary matrices.    Let be an matrix. We saw in that it is invertible if and only if its reduced row echelon form is the identity. We see from that this is the case if and only if there are elementary matrices so that But since every elementary matrix has inverse that is an elementary matrix, such an equation is possible if and only if    "
},
{
  "id": "def-rowlinalt",
  "level": "2",
  "url": "sec-matrices3.html#def-rowlinalt",
  "type": "Definition",
  "number": "2.7.7",
  "title": "",
  "body": "   row linear and alternating functions    Let be the set of all matrices with entries in . A function is called:   row linear if, keeping all rows except the -th row constant, is linear on the -th row (for any ). In other words if    alternating if reverses sign whenever two rows are switched. In other words     "
},
{
  "id": "def-determinant",
  "level": "2",
  "url": "sec-matrices3.html#def-determinant",
  "type": "Definition",
  "number": "2.7.8",
  "title": "",
  "body": "   determinant of a matrix    The determinant is the unique function which is row linear, alternating and satisfies .   "
},
{
  "id": "comment-determinantvolume",
  "level": "2",
  "url": "sec-matrices3.html#comment-determinantvolume",
  "type": "Remark",
  "number": "2.7.9",
  "title": "",
  "body": " While we define the determinant abstractly so that we may find many of its important properties, the determinant should be known as a way to correctly compute and work with volume in -dimensions . We will see this shortly in and dimensions. This is of particular importance when we consider integrals in higher dimensions.  "
},
{
  "id": "thm-determinant",
  "level": "2",
  "url": "sec-matrices3.html#thm-determinant",
  "type": "Theorem",
  "number": "2.7.10",
  "title": "",
  "body": "  The function given is the unique function satisfying the properties of the determinant in . It is thus written as .   "
},
{
  "id": "exa-2x2det",
  "level": "2",
  "url": "sec-matrices3.html#exa-2x2det",
  "type": "Example",
  "number": "2.7.11",
  "title": "Determinants of <span class=\"process-math\">\\(2\\times 2\\)<\/span> matrices.",
  "body": " Determinants of matrices   For matrices, we can write down a simple formula which many of you already know. Take and observe that while . So    "
},
{
  "id": "exa-3x3det",
  "level": "2",
  "url": "sec-matrices3.html#exa-3x3det",
  "type": "Example",
  "number": "2.7.12",
  "title": "Determinants of <span class=\"process-math\">\\(3\\times 3\\)<\/span> matrices.",
  "body": " Determinants of matrices   Finding the determinant of a involves finding three cofactors. Taking we can compute the minors , and using the formula in as Then our inductive formula gives In fact, there is a formula for determinants that, were one so inclined, could be memorized.    "
},
{
  "id": "lem-altalt",
  "level": "2",
  "url": "sec-matrices3.html#lem-altalt",
  "type": "Lemma",
  "number": "2.7.13",
  "title": "",
  "body": "  A row linear function is alternating if and only if whenever has two identical rows.    Assume is alternating and has two identical rows. Then switching these rows still gives which implies or . Conversely, suppose is row linear and is zero whenever has two identical rows. Then Thus and is alternating.   "
},
{
  "id": "proof-17",
  "level": "2",
  "url": "sec-matrices3.html#proof-17",
  "type": "Proof",
  "number": "2.7.3.1",
  "title": "Proof of the existence portion of Theorem 2.7.10.",
  "body": " Proof of the existence portion of  We will use induction on to show that satisfies the properties in .    Row Linear  To show row linearity, we notice that since is row linear, the cofactors are row linear. By this we mean that if we denote the rows of matrices as , then is row linear. This implies that the formula is row linear in the last rows. However, we can notice that this formula can also be written as the matrix product which is clearly linear in the first row.    Normalized  We call the property that a normalization property. To prove it, we can assume that it holds for . Now, notice that the minor while the minors has all zeros in the -st row. But if there is a row equal to zero, say , and is row linear, then So subtracting gives . Thus, since we have shown that is row linear, we have that the cofactors of the identity are for and otherwise. But then   Alternating  To show the alternating property, we may assume inductively that satisfies this property. This implies the cofactors are also alternating and in turn, switching any two of the last rows for does result in multiplying by . Thus, we need only show that if we switch with the first row then switches signs. Using the alternating property for the last rows, we may assume that . Furthermore, using the formula in we see that the alternating property holds for matrices, so we may assume . Finally, using row linearity, it suffices to show this property when and are standard basis row vectors.  In the case where , one sees that the minor is the of a matrix with first row zero. So by the argument given above in equation , we have . But as all other entries on the first row are zero, we then have so that switching the first two rows does act as multiplying the number by .  Now assume we have two distinct indices, and and take to be the submatrix of obtained by eliminating the first two rows and the -th and -the columns. A quick look shows then that if  Indeed, one must subtract from because, in the submatrix obtained by eliminating the first row and the -th column, the index of the entry goes down by one. On the other hand, this does not occur if we switch the order (again assuming ) so we get The difference in the sign justifies that switching the first two rows does indeed multiply the value of by .    "
},
{
  "id": "lem-detelem",
  "level": "2",
  "url": "sec-matrices3.html#lem-detelem",
  "type": "Lemma",
  "number": "2.7.14",
  "title": "",
  "body": "  If is a function satisfying the conditions of , then Furthermore, if is any square matrix and is any elementary matrix of the same size,     We leave it to the student to work out the first set of equations. For the second, notice that if is Type I then is just with two rows switched so by the alternating property and the first equation . On the other hand, if is Type II so that then multiplies the -th row by . So row linearity and the second equation gives . Finally, if is Type III and equals we have that the -th row of is . So using row linearity, , and the third equation we get    "
},
{
  "id": "lem-detinv",
  "level": "2",
  "url": "sec-matrices3.html#lem-detinv",
  "type": "Lemma",
  "number": "2.7.15",
  "title": "",
  "body": "  Suppose satisfies the properties of . Then is invertible if and only if .    Let be the reduced row echelon form of so that there are elementary matrices so that Taking of both sides and repeatedly applying gives Noting that we also have By , is invertible if and only if . If this is the case, then the normalization property says the right hand side is . If not, then must have a row of zeros (because it is a square matrix) which implies by the argument in equation that . This proves the statement.   "
},
{
  "id": "proof-20",
  "level": "2",
  "url": "sec-matrices3.html#proof-20",
  "type": "Proof",
  "number": "2.7.3.2",
  "title": "Proof of uniqueness of Theorem 2.7.10.",
  "body": " Proof of uniqueness of  If is not invertible, then we must have by . On the other hand, the proof of the same lemma showed that if is invertible, then for a collection of an elementary matrices which row reduce . However, shows that for elementary matrices , is determined by the properties of . Thus there is no choice in defining for an arbitrary .  "
},
{
  "id": "prop-productdet",
  "level": "2",
  "url": "sec-matrices3.html#prop-productdet",
  "type": "Proposition",
  "number": "2.7.16",
  "title": "",
  "body": "  Given two matrices and then    If either or is not invertible, then is not invertible. Indeed, if were an inverse of then and would show that or had an inverse (here you would need to observe that, for square matrices, a left or right inverse is an inverse which follows from proven independently below). Thus in the non-invertible case both sides are zero. On the other hand, if and are invertible, then by , they are both products of elementary matrices So repeatedly using , we have    "
},
{
  "id": "p-376",
  "level": "2",
  "url": "sec-matrices3.html#p-376",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "adjugate "
},
{
  "id": "lem-rightleftinverse",
  "level": "2",
  "url": "sec-matrices3.html#lem-rightleftinverse",
  "type": "Lemma",
  "number": "2.7.17",
  "title": "",
  "body": "  If is a right inverse or left inverse of a square matrix , then it is the inverse of .    Since is a square matrix, it represents a linear transformation from to . If it has a left inverse so that then that transformation is one-to-one. But by we have that this means it is an isomorphism. Thus it has an inverse linear transformation which can be represented by a two sided matrix inverse . But then since we may multiply on the right by and obtain . A similar argument applies for the right inverse.   "
},
{
  "id": "exercise-47",
  "level": "2",
  "url": "sec-matrices3.html#exercise-47",
  "type": "Exercise",
  "number": "2.7.5.1",
  "title": "",
  "body": "Determine if the matrix is invertible using row reduction (augment with the identity). If it is, find the inverse.      "
},
{
  "id": "exercise-48",
  "level": "2",
  "url": "sec-matrices3.html#exercise-48",
  "type": "Exercise",
  "number": "2.7.5.2",
  "title": "",
  "body": "Compute the determinants of the following matrices.           "
},
{
  "id": "exercise-49",
  "level": "2",
  "url": "sec-matrices3.html#exercise-49",
  "type": "Exercise",
  "number": "2.7.5.3",
  "title": "",
  "body": " Verify the first three equations in .  "
},
{
  "id": "exercise-50",
  "level": "2",
  "url": "sec-matrices3.html#exercise-50",
  "type": "Exercise",
  "number": "2.7.5.4",
  "title": "",
  "body": " Use to show that if is an invertible matrix then   "
},
{
  "id": "exercise-51",
  "level": "2",
  "url": "sec-matrices3.html#exercise-51",
  "type": "Exercise",
  "number": "2.7.5.5",
  "title": "",
  "body": " Let be the a matrix. Consider the column vectors and in and write for the parallelogram in spanned by and (this is the parallelogram with sides , and their translations). Show that   First rotate and by multiplying by a rotation matrix so that is of the form . Use to show this won't change the determinant of and observe that this does not change the area of the parallelogram. However, the new area and determinant is easy to calculate and compare.  "
},
{
  "id": "sec-geom1",
  "level": "1",
  "url": "sec-geom1.html",
  "type": "Section",
  "number": "3.1",
  "title": "Geometry I",
  "body": " Geometry I   So far, we have avoided the usual undergraduate approach to calling a vector something with a magnitude and direction . The reason for this is that the notion of magnitude is in fact additional data that we impose upon a vector space. By this I mean that, given a vector in a vector space , there is no unique way to assign that vector a length. This is because a vector space should be thought of like a skeleton of a person. It has only enough structure to do vector arithmetic, but not enough to talk about distance and angles. However, we can put some flesh on this skeleton and start working with geometry by adding additional bells and whistles. To do so, we introduce inner product spaces which are vector spaces with an additional pairing.     inner product space    An inner product space  over is a vector space along with a pairing which satisfies   Linear     Conjugate Symmetric     Positive Definite  with equality if and only if .     Note that the positive definite condition makes sense even when . In that case, one might worry that is a complex number like . Then what does it mean for it to be greater than zero? However, we see from conjugate symmetry, that which tells us that the value must be a real number (only real numbers equal their conjugates). But we know what it means to say a real number is non-negative.    Transpose Matrices  There are several examples of inner product spaces, the most commonly used being the real vector space with the dot product. To discuss this, we need the simple definition of transpose matrix.     transpose matrix    Given an matrix , its transpose is the matrix where . We say that a square matrix is symmetric if .     Transpose of a matrix   Finding the transpose matrix is simple, just swap row entries with column entries. For example, if then     The transpose behaves nicely with respect to several of the operations we have introduced.    Given matrices and where the operations below are well defined (i.e. they have compatible sizes to add or multiply), the following properties hold:   ,   ,  A square matrix is invertible if and only if is invertible. In this case .   .   .      The first two equations can be justified by writing out the formulas and checking both sides. For the third, note that is invertible if and only if there is an inverse matrix for which Thus is an inverse to if and only if is an inverse to . For the statement on determinants, we note that if is not invertible then by (3), so is so both determinants are zero. On the other hand, if is invertible, then by  is a product of elementary matrices so that By we have and But one observes that the Type I and II elementary matrices are symmetric, and the transpose of a Type III elementary matrix is also Type III which has determinant equal to (by ). This implies each of the factors in the two above equations are equal so that . Finally, equation (5) is justified by .      Dot Product  Long overdue is the following notion which gives the central example of a real inner product space.     dot product    Given column vectors and in , the dot product of with is the real number If we are given and as row vectors, we take . We say that and are orthogonal if .     Dot products of vectors   Let us make sure that we understand just how easy the dot product is. If then Notice we can obtain any real number as a dot product, but, as we will see, these numbers tell us about the relative direction of vectors.    The diligent student is encouraged to verify the following lemma.    The dot product makes into an inner product space over .    The most important aspect of the dot product is that it allows one to bring geometric notions into the vector space . First, we consider a real vector as an arrow from the origin to the endpoint . Then we have the important ancient result:   Pythagorean Theorem   The length of the vector is A vector is called a unit vector if .    For any inner product space (over or ), the square root makes sense and we often refer to this number as the norm of . One can check that the norm in any inner product space satisfies the equation   The fact that the proposition above is the Pythagorean Theorem can be seen as in two dimensions that this is just the distance formula (which is really the Pythagorean Theorem) and that in three dimensions this is the Pythagorean Theorem applied twice. In higher dimensions, one could either argue inductively or simply take this as a definition. While length is of great geometric importance, so is angle. Surprisingly, the dot product gives us both!    Suppose and are vectors in . Let be the angle between the line segments from to and from to (or the arrows connecting the origin to the vectors). Then     First, if and are linearly dependent, then with (since both vectors are non-zero). If then both vectors point in the same direction, so their angle should be or . But in this case we see which verifies the equality. If then we have that they point in opposite directions and thus or . Again we observe So let us assume they are linearly independent. Then the arrow vectors and make up a triangle. If the angle at and is then the Law of Cosines (a basic generalization of the Pythagorean Theorem) says that Subtracting from both sides and dividing by gives the result.    The upshot of this amazing result is that we can now get quantitative and qualitative information about vectors very easily.   Computing the angle between vectors   If we were asked to find the angle between the row vectors and before having the dot product, it is not surprising that we would struggle. But now we just compute lengths and the dot product to see: Putting these into our formula gives or implying that . In this case, we get a quick pleasant answer. However, we see even when we find that that the angle made between and is acute. Were it , they would be perpendicular and if it were negative, they would form an obtuse angle. Point being, even without evaluating , we obtain qualitative information about our vectors.    Moreover, one can easily prove some basic, but useful, inequalities such as.   Triangle Inequality   Given two vectors and in an inner product space     This can be shown for a general inner product space using the Cauchy-Schwarz inequality below. Here we check it for the dot product on by squaring both sides and seeing that (because ).    Note that this is the triangle inequality because it is saying that the sum of two side lengths of a triangle is greater than the side length of the third.    Other Examples  With all of this discussion of the dot product, one might wonder why we bothered with the general definition of an inner product space. In fact, many of the most useful and advanced applications of linear algebra require working over (for example, quantum mechanics), and so it is worth mentioning a few more interesting examples.   Hermitian inner product   Let be the vector space of column vectors in . We can define a straightforward generalization of the dot product here by taking Writing this out, we have if then One can check this gives an inner product on . In fact, this inner product has a lot more structure than meets the eye and is the right answer to how to do geometry in complex space. For example, one still has that gives the length of the vector . But gives two quantities, relating to both an angle and an area swept out by the two vectors.    Another important example to consider is the following Hilbert Space.   Hilbert space of functions   Let be an interval in and consider all square integrable functions from to (this means that both the real and imaginary parts of the square of the function are integrable). Then we can define the inner product Here, when we integrate a complex valued function we mean This inner product space is widely used and generalized in applications. We will see in the next section a rather interesting set of vectors in this space that form the heart of Fourier series.    The result concerning angles between vectors and the dot product suggests a more general inequality for inner product spaces.   Cauchy-Schwarz Inequality   If and are vectors in an inner product space, then with equality if and only if and are linearly dependent.    There is a rather fun proof of this fact which we will put as a guided exercise.     Show that, given any matrix , the matrix is symmetric.   Find the angle between the vectors       Find the unit vector pointing in the direction of when               Suppose is a non-zero vector in . Projecting another vector to means finding the part of that points parallel to . More precisely, there are unique vectors and for which where is orthogonal to and is the projection. Explain why the formula gives the vector projection .   Cauchy-Schwarz Proof Let be an inner product space and suppose is a non-zero vector.   Show that and are linearly dependent then the Cauchy-Inequality is actually an equality.   Show that if and are linearly independent then there is no and in for which    Show that if has polar decomposition then    Using parts (b) and (c), show that the Cauchy-Schwarz inequality for independent vectors follows from the fact that there are no real solutions to this equation for .    "
},
{
  "id": "def-ips",
  "level": "2",
  "url": "sec-geom1.html#def-ips",
  "type": "Definition",
  "number": "3.1.1",
  "title": "",
  "body": "   inner product space    An inner product space  over is a vector space along with a pairing which satisfies   Linear     Conjugate Symmetric     Positive Definite  with equality if and only if .    "
},
{
  "id": "def-transpose",
  "level": "2",
  "url": "sec-geom1.html#def-transpose",
  "type": "Definition",
  "number": "3.1.2",
  "title": "",
  "body": "   transpose matrix    Given an matrix , its transpose is the matrix where . We say that a square matrix is symmetric if .   "
},
{
  "id": "example-42",
  "level": "2",
  "url": "sec-geom1.html#example-42",
  "type": "Example",
  "number": "3.1.3",
  "title": "Transpose of a matrix.",
  "body": " Transpose of a matrix   Finding the transpose matrix is simple, just swap row entries with column entries. For example, if then    "
},
{
  "id": "proposition-16",
  "level": "2",
  "url": "sec-geom1.html#proposition-16",
  "type": "Proposition",
  "number": "3.1.4",
  "title": "",
  "body": "  Given matrices and where the operations below are well defined (i.e. they have compatible sizes to add or multiply), the following properties hold:   ,   ,  A square matrix is invertible if and only if is invertible. In this case .   .   .      The first two equations can be justified by writing out the formulas and checking both sides. For the third, note that is invertible if and only if there is an inverse matrix for which Thus is an inverse to if and only if is an inverse to . For the statement on determinants, we note that if is not invertible then by (3), so is so both determinants are zero. On the other hand, if is invertible, then by  is a product of elementary matrices so that By we have and But one observes that the Type I and II elementary matrices are symmetric, and the transpose of a Type III elementary matrix is also Type III which has determinant equal to (by ). This implies each of the factors in the two above equations are equal so that . Finally, equation (5) is justified by .   "
},
{
  "id": "def-dotproduct",
  "level": "2",
  "url": "sec-geom1.html#def-dotproduct",
  "type": "Definition",
  "number": "3.1.5",
  "title": "",
  "body": "   dot product    Given column vectors and in , the dot product of with is the real number If we are given and as row vectors, we take . We say that and are orthogonal if .   "
},
{
  "id": "example-43",
  "level": "2",
  "url": "sec-geom1.html#example-43",
  "type": "Example",
  "number": "3.1.6",
  "title": "Dot products of vectors.",
  "body": " Dot products of vectors   Let us make sure that we understand just how easy the dot product is. If then Notice we can obtain any real number as a dot product, but, as we will see, these numbers tell us about the relative direction of vectors.   "
},
{
  "id": "lem-dotprodprop",
  "level": "2",
  "url": "sec-geom1.html#lem-dotprodprop",
  "type": "Lemma",
  "number": "3.1.7",
  "title": "",
  "body": "  The dot product makes into an inner product space over .   "
},
{
  "id": "prop-pythagorean",
  "level": "2",
  "url": "sec-geom1.html#prop-pythagorean",
  "type": "Proposition",
  "number": "3.1.8",
  "title": "Pythagorean Theorem.",
  "body": " Pythagorean Theorem   The length of the vector is A vector is called a unit vector if .   "
},
{
  "id": "p-406",
  "level": "2",
  "url": "sec-geom1.html#p-406",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "norm "
},
{
  "id": "prop-angles",
  "level": "2",
  "url": "sec-geom1.html#prop-angles",
  "type": "Proposition",
  "number": "3.1.9",
  "title": "",
  "body": "  Suppose and are vectors in . Let be the angle between the line segments from to and from to (or the arrows connecting the origin to the vectors). Then     First, if and are linearly dependent, then with (since both vectors are non-zero). If then both vectors point in the same direction, so their angle should be or . But in this case we see which verifies the equality. If then we have that they point in opposite directions and thus or . Again we observe So let us assume they are linearly independent. Then the arrow vectors and make up a triangle. If the angle at and is then the Law of Cosines (a basic generalization of the Pythagorean Theorem) says that Subtracting from both sides and dividing by gives the result.   "
},
{
  "id": "example-44",
  "level": "2",
  "url": "sec-geom1.html#example-44",
  "type": "Example",
  "number": "3.1.10",
  "title": "Computing the angle between vectors.",
  "body": " Computing the angle between vectors   If we were asked to find the angle between the row vectors and before having the dot product, it is not surprising that we would struggle. But now we just compute lengths and the dot product to see: Putting these into our formula gives or implying that . In this case, we get a quick pleasant answer. However, we see even when we find that that the angle made between and is acute. Were it , they would be perpendicular and if it were negative, they would form an obtuse angle. Point being, even without evaluating , we obtain qualitative information about our vectors.   "
},
{
  "id": "proposition-19",
  "level": "2",
  "url": "sec-geom1.html#proposition-19",
  "type": "Proposition",
  "number": "3.1.11",
  "title": "Triangle Inequality.",
  "body": " Triangle Inequality   Given two vectors and in an inner product space     This can be shown for a general inner product space using the Cauchy-Schwarz inequality below. Here we check it for the dot product on by squaring both sides and seeing that (because ).   "
},
{
  "id": "exa-hermitianinnerproduct",
  "level": "2",
  "url": "sec-geom1.html#exa-hermitianinnerproduct",
  "type": "Example",
  "number": "3.1.12",
  "title": "Hermitian inner product.",
  "body": " Hermitian inner product   Let be the vector space of column vectors in . We can define a straightforward generalization of the dot product here by taking Writing this out, we have if then One can check this gives an inner product on . In fact, this inner product has a lot more structure than meets the eye and is the right answer to how to do geometry in complex space. For example, one still has that gives the length of the vector . But gives two quantities, relating to both an angle and an area swept out by the two vectors.   "
},
{
  "id": "exa-HilbertSpace",
  "level": "2",
  "url": "sec-geom1.html#exa-HilbertSpace",
  "type": "Example",
  "number": "3.1.13",
  "title": "Hilbert space of functions.",
  "body": " Hilbert space of functions   Let be an interval in and consider all square integrable functions from to (this means that both the real and imaginary parts of the square of the function are integrable). Then we can define the inner product Here, when we integrate a complex valued function we mean This inner product space is widely used and generalized in applications. We will see in the next section a rather interesting set of vectors in this space that form the heart of Fourier series.   "
},
{
  "id": "thm-CauchySchwarz",
  "level": "2",
  "url": "sec-geom1.html#thm-CauchySchwarz",
  "type": "Theorem",
  "number": "3.1.14",
  "title": "Cauchy-Schwarz Inequality.",
  "body": " Cauchy-Schwarz Inequality   If and are vectors in an inner product space, then with equality if and only if and are linearly dependent.   "
},
{
  "id": "exercise-52",
  "level": "2",
  "url": "sec-geom1.html#exercise-52",
  "type": "Exercise",
  "number": "3.1.4.1",
  "title": "",
  "body": " Show that, given any matrix , the matrix is symmetric.  "
},
{
  "id": "exe-vectorangles",
  "level": "2",
  "url": "sec-geom1.html#exe-vectorangles",
  "type": "Exercise",
  "number": "3.1.4.2",
  "title": "",
  "body": "Find the angle between the vectors      "
},
{
  "id": "exercise-54",
  "level": "2",
  "url": "sec-geom1.html#exercise-54",
  "type": "Exercise",
  "number": "3.1.4.3",
  "title": "",
  "body": "Find the unit vector pointing in the direction of when             "
},
{
  "id": "exe-projection",
  "level": "2",
  "url": "sec-geom1.html#exe-projection",
  "type": "Exercise",
  "number": "3.1.4.4",
  "title": "",
  "body": " Suppose is a non-zero vector in . Projecting another vector to means finding the part of that points parallel to . More precisely, there are unique vectors and for which where is orthogonal to and is the projection. Explain why the formula gives the vector projection .  "
},
{
  "id": "exercise-56",
  "level": "2",
  "url": "sec-geom1.html#exercise-56",
  "type": "Exercise",
  "number": "3.1.4.5",
  "title": "Cauchy-Schwarz Proof.",
  "body": "Cauchy-Schwarz Proof Let be an inner product space and suppose is a non-zero vector.   Show that and are linearly dependent then the Cauchy-Inequality is actually an equality.   Show that if and are linearly independent then there is no and in for which    Show that if has polar decomposition then    Using parts (b) and (c), show that the Cauchy-Schwarz inequality for independent vectors follows from the fact that there are no real solutions to this equation for .  "
},
{
  "id": "sec-geom2",
  "level": "1",
  "url": "sec-geom2.html",
  "type": "Section",
  "number": "3.2",
  "title": "Geometry II",
  "body": " Geometry II  Now that we have a way to discuss length and angles, a whole new set of questions arises. For example, when we put a coordinate chart on an inner product space, we may want this chart to have axes that are perpendicular to each other. We may also want the coordinates to agree with some unit length so that, for example, the vector with coordinates has length . Perhaps you will be pleasantly surprised that such notions have names and many of the details concerning them have been worked out completely. We will cover some of them in this section.  We start with a nice result which tells us how far a little geometry can take us.    If is an inner product space and are non-zero vectors which are pairwise orthogonal, then they are linearly independent.    Suppose we have a linear relation We may pair both sides with to obtain Since are non-zero, we have that by the positive definite property. So dividing implies for every and the set of vectors is linearly independent.    Of course, we may want a little more than orthogonality of vectors.     dot product    We say that the vectors of an inner product space are orthonormal if they are pairwise orthogonal unit vectors. We call an orthonormal basis if it is a basis of orthonormal vectors.    Although I may not convince you of this, I must assert that there's nothing in life that's better than having a good orthonormal basis! This is means that not only do you have a basis and thus a system of coordinates for your vector space, but you have coordinates which reflect the geometry of Euclidean space (in the real setting and a little bit more in the complex setting). Let's see a practical application of this.   Formula for coordinates   Recall that if was a basis for then we had a coordinate map This map is in fact easy to describe - it just takes a vector and produces the column vector whose entries are the unique coefficients in the linear combination . While easy to describe, there is not generally a formula for , and one may need to solve a linear system to obtain the map. However, if is an inner product space and is an orthonormal basis, we have an immediate and easy formula To see that this formula works, pair the difference with any basis vector to see But itself is a linear combination of the and so the above equality implies . But this implies that which means the coefficients of giving are exactly .  Let us apply this result for a computational example in with the dot product. Consider the orthonormal basis We can then write coordinates of simply by taking dot products    Now, one might wonder whether, given a finite dimensional inner product space , we can always obtain an orthonormal basis. Happily, we have a nice method or process. In fact, it will be better for us to perform this algorithm to first obtain an orthogonal basis, and then afterwards normalize to get an orthonormal one. Let us describe this method inductively by assuming we have been given a basis .    Induction Hypothesis Assume we have found non-zero orthogonal vectors so that    Induction Step We define -th vector    This process is called the Gram-Schmidt process and we write it as a Theorem.   Gram-Schmidt   Given a basis of an inner product space , the algorithm above creates an orthogonal basis . Normalizing each vector gives an orthonormal basis.    We now write a short script that will apply this process to a collection of vectors. This is written just to give the orthogonal basis and leaves the normalization step. Let's quickly describe what's happenning in the script. The code def applyGS(vectors): defines a function which takes input as a list of vectors. So, if you enter a list of other types, you will get an error. What follows in the indentation is the definition of the applyGS function. The first part of n = len(vector) declares as the number of vectors in the list vectors (len is short for length). Then we create the list newVectors which is a copy of the inputed vectors and will be altered as we apply Gram-Schmidt.  The code for k in range(1,n): starts a for loop which begins at and keeps going until . The for loop declares vk as the vector and creates the short list inductionWs which corresponds to the vectors . The list adjustedWs scales these vectors to Then theSum adds these vectors together and wk is defined as the new as in equation . The final step changes the -th vector of newVectors to wk . The code return(newVectors) tells the function to return the list .  After defining the function, we make a list of three vectors and evaluate the function on this list. You may alter the list by changing the vectors to vectors in any fixed dimension and adding more if desired.  Now that we know such nice bases exist, we proceed to exploit their usefulness. First, we note that we may use inner products to decompose our entire space into two subspaces. For this we need a couple of definitions.     direct sum of vector spaces    Given a vector space , we say that two vector subspaces and are complementary if In this case, every vector can be written uniquely as the sum where is in and is in . We write and say is a direct sum of and .    It is not hard to obtain examples of direct sums. Indeed, the following lemma says that one can always find a complement to a proper subspace.    If is a proper subspace of a finite dimensional vector space over , there is another subspace which is complementary to so that . In this case    Since is finite dimensional, so is . If is a basis of , one can extend it by adding vectors to make a basis of . But it is not too hard to show that taking to be the span of gives a complementary subspace with dimension equation in the lemma.     Complementary lines in   If we take the line then any line through the origin that does not have slope is complementary to . Observe that this shows that complementary subspaces are not unique.    When the vector space is an inner product space, the previous lemma has a natural solution.     orthogonal complement to a vector subspace    If is an inner product space and is a subspace, we say that the orthogonal complement to is the vector subspace    You will show that this is a vector subspace in the exercises.    If is a finite dimensional inner product space, is a subspace and is a vector, then there are unique vectors and in for which In particular .    Let be an orthonormal basis for and an orthonormal basis for . We claim then that is a basis for . First, one sees that it must be linearly independent by noting that it is an orthogonal set of vectors and applying .  To see that it spans , suppose that is not in the span of . Then we may apply Gram-Schmidt to and obtain a vector But pairing with any basis element gives zero which implies by linearity that is in . This, in turn says that is a linear combination of which shows that is in the span of .  Thus, writing as a linear combination of the two bases yield the unique sum .    In fact, this proposition gives us the existence of a linear projection.     projection to a vector subspace    Let be an inner product space and a subspace. Given a vector , the projection of to , denoted is the vector in which is closest to .    This definition may seem a bit cryptic, but we make it plain with a proposition generalizing .    Let be an inner product space and a subspace which has an orthonormal basis . Given a vector of the decomposition in is given by and    To see the first equation, we note that has already given us a unique decomposition . Given any vector we observe that the square of the distance from to is Here we used the fact that because both and are in while is in . Clearly, if then this distance squared is greater than . Thus minimizes the distance from to and is the projection. Examining the proof of we see that is given explicitly as the linear combination in equation .      Let and consider the Hilbert space given in . Show that the set is in fact an orthonormal set of vectors. In fact, this set makes up what is known as a Hilbert basis (which is a good infinite dimensional version of a basis).   Let in the inner product space with the dot product.   Show that is an orthonormal basis.   If what is ?   Apply the Gram-Schmidt algorithm to obtain orthogonal bases for the subspaces spanned by the following collections of vectors. Give an orthonormal bases afterwards.   The vectors    The two vectors spanning the plane in    \"theSageGS\" Use the Sage function to learn about applying Gram-Schmidt.   Choose a random basis of four vectors in Euclidean which are linearly independent but not orthogonal. Use the function applyGS() in the Sage cell above equation to apply Gram-Schmidt to your list and write the result.   Change the third vector in your original list to the sum of the first two and evaluate applyGS() to the new list. What happened? Explain why you obtained this response.  Use applyGS() on the list consisting only of your first three vectors. What does this tell you?   Given a vector subspace of an inner product space , show that the orthogonal complement of is in fact a vector subspace.    Let Find where was given in part (b) of .    Find a basis for where was given in part (b) of .   Solve the matrix equation where has rows equal to the transpose of the two vectors in part (b)   "
},
{
  "id": "lem-orthogonalindependence",
  "level": "2",
  "url": "sec-geom2.html#lem-orthogonalindependence",
  "type": "Lemma",
  "number": "3.2.1",
  "title": "",
  "body": "  If is an inner product space and are non-zero vectors which are pairwise orthogonal, then they are linearly independent.    Suppose we have a linear relation We may pair both sides with to obtain Since are non-zero, we have that by the positive definite property. So dividing implies for every and the set of vectors is linearly independent.   "
},
{
  "id": "def-orthonormal",
  "level": "2",
  "url": "sec-geom2.html#def-orthonormal",
  "type": "Definition",
  "number": "3.2.2",
  "title": "",
  "body": "   dot product    We say that the vectors of an inner product space are orthonormal if they are pairwise orthogonal unit vectors. We call an orthonormal basis if it is a basis of orthonormal vectors.   "
},
{
  "id": "example-47",
  "level": "2",
  "url": "sec-geom2.html#example-47",
  "type": "Example",
  "number": "3.2.3",
  "title": "Formula for coordinates.",
  "body": " Formula for coordinates   Recall that if was a basis for then we had a coordinate map This map is in fact easy to describe - it just takes a vector and produces the column vector whose entries are the unique coefficients in the linear combination . While easy to describe, there is not generally a formula for , and one may need to solve a linear system to obtain the map. However, if is an inner product space and is an orthonormal basis, we have an immediate and easy formula To see that this formula works, pair the difference with any basis vector to see But itself is a linear combination of the and so the above equality implies . But this implies that which means the coefficients of giving are exactly .  Let us apply this result for a computational example in with the dot product. Consider the orthonormal basis We can then write coordinates of simply by taking dot products   "
},
{
  "id": "thm-GS",
  "level": "2",
  "url": "sec-geom2.html#thm-GS",
  "type": "Theorem",
  "number": "3.2.4",
  "title": "Gram-Schmidt.",
  "body": " Gram-Schmidt   Given a basis of an inner product space , the algorithm above creates an orthogonal basis . Normalizing each vector gives an orthonormal basis.   "
},
{
  "id": "definition-33",
  "level": "2",
  "url": "sec-geom2.html#definition-33",
  "type": "Definition",
  "number": "3.2.5",
  "title": "",
  "body": "   direct sum of vector spaces    Given a vector space , we say that two vector subspaces and are complementary if In this case, every vector can be written uniquely as the sum where is in and is in . We write and say is a direct sum of and .   "
},
{
  "id": "lemma-7",
  "level": "2",
  "url": "sec-geom2.html#lemma-7",
  "type": "Lemma",
  "number": "3.2.6",
  "title": "",
  "body": "  If is a proper subspace of a finite dimensional vector space over , there is another subspace which is complementary to so that . In this case    Since is finite dimensional, so is . If is a basis of , one can extend it by adding vectors to make a basis of . But it is not too hard to show that taking to be the span of gives a complementary subspace with dimension equation in the lemma.   "
},
{
  "id": "example-48",
  "level": "2",
  "url": "sec-geom2.html#example-48",
  "type": "Example",
  "number": "3.2.7",
  "title": "Complementary lines in <span class=\"process-math\">\\(\\mathbb{R}^2\\)<\/span>.",
  "body": " Complementary lines in   If we take the line then any line through the origin that does not have slope is complementary to . Observe that this shows that complementary subspaces are not unique.   "
},
{
  "id": "def-orthogonalcomplement",
  "level": "2",
  "url": "sec-geom2.html#def-orthogonalcomplement",
  "type": "Definition",
  "number": "3.2.8",
  "title": "",
  "body": "   orthogonal complement to a vector subspace    If is an inner product space and is a subspace, we say that the orthogonal complement to is the vector subspace   "
},
{
  "id": "lem-sumcomp",
  "level": "2",
  "url": "sec-geom2.html#lem-sumcomp",
  "type": "Lemma",
  "number": "3.2.9",
  "title": "",
  "body": "  If is a finite dimensional inner product space, is a subspace and is a vector, then there are unique vectors and in for which In particular .    Let be an orthonormal basis for and an orthonormal basis for . We claim then that is a basis for . First, one sees that it must be linearly independent by noting that it is an orthogonal set of vectors and applying .  To see that it spans , suppose that is not in the span of . Then we may apply Gram-Schmidt to and obtain a vector But pairing with any basis element gives zero which implies by linearity that is in . This, in turn says that is a linear combination of which shows that is in the span of .  Thus, writing as a linear combination of the two bases yield the unique sum .   "
},
{
  "id": "def-projection",
  "level": "2",
  "url": "sec-geom2.html#def-projection",
  "type": "Definition",
  "number": "3.2.10",
  "title": "",
  "body": "   projection to a vector subspace    Let be an inner product space and a subspace. Given a vector , the projection of to , denoted is the vector in which is closest to .   "
},
{
  "id": "proposition-20",
  "level": "2",
  "url": "sec-geom2.html#proposition-20",
  "type": "Proposition",
  "number": "3.2.11",
  "title": "",
  "body": "  Let be an inner product space and a subspace which has an orthonormal basis . Given a vector of the decomposition in is given by and    To see the first equation, we note that has already given us a unique decomposition . Given any vector we observe that the square of the distance from to is Here we used the fact that because both and are in while is in . Clearly, if then this distance squared is greater than . Thus minimizes the distance from to and is the projection. Examining the proof of we see that is given explicitly as the linear combination in equation .   "
},
{
  "id": "exercise-57",
  "level": "2",
  "url": "sec-geom2.html#exercise-57",
  "type": "Exercise",
  "number": "3.2.1",
  "title": "",
  "body": " Let and consider the Hilbert space given in . Show that the set is in fact an orthonormal set of vectors. In fact, this set makes up what is known as a Hilbert basis (which is a good infinite dimensional version of a basis).  "
},
{
  "id": "exercise-58",
  "level": "2",
  "url": "sec-geom2.html#exercise-58",
  "type": "Exercise",
  "number": "3.2.2",
  "title": "",
  "body": "Let in the inner product space with the dot product.   Show that is an orthonormal basis.   If what is ?  "
},
{
  "id": "exe-GS",
  "level": "2",
  "url": "sec-geom2.html#exe-GS",
  "type": "Exercise",
  "number": "3.2.3",
  "title": "",
  "body": "Apply the Gram-Schmidt algorithm to obtain orthogonal bases for the subspaces spanned by the following collections of vectors. Give an orthonormal bases afterwards.   The vectors    The two vectors spanning the plane in    "
},
{
  "id": "exercise-60",
  "level": "2",
  "url": "sec-geom2.html#exercise-60",
  "type": "Exercise",
  "number": "3.2.4",
  "title": "",
  "body": "Use the Sage function to learn about applying Gram-Schmidt.   Choose a random basis of four vectors in Euclidean which are linearly independent but not orthogonal. Use the function applyGS() in the Sage cell above equation to apply Gram-Schmidt to your list and write the result.   Change the third vector in your original list to the sum of the first two and evaluate applyGS() to the new list. What happened? Explain why you obtained this response.  Use applyGS() on the list consisting only of your first three vectors. What does this tell you? "
},
{
  "id": "exercise-61",
  "level": "2",
  "url": "sec-geom2.html#exercise-61",
  "type": "Exercise",
  "number": "3.2.5",
  "title": "",
  "body": " Given a vector subspace of an inner product space , show that the orthogonal complement of is in fact a vector subspace.  "
},
{
  "id": "exercise-62",
  "level": "2",
  "url": "sec-geom2.html#exercise-62",
  "type": "Exercise",
  "number": "3.2.6",
  "title": "",
  "body": " Let Find where was given in part (b) of .  "
},
{
  "id": "exercise-63",
  "level": "2",
  "url": "sec-geom2.html#exercise-63",
  "type": "Exercise",
  "number": "3.2.7",
  "title": "",
  "body": " Find a basis for where was given in part (b) of .   Solve the matrix equation where has rows equal to the transpose of the two vectors in part (b) "
},
{
  "id": "sec-diag1",
  "level": "1",
  "url": "sec-diag1.html",
  "type": "Section",
  "number": "4.1",
  "title": "Diagonalization",
  "body": " Diagonalization   We now return to linear transformations and tackle the problem of diagonalization. Let us first put ourselves in the right context. The linear transformations we want to consider here have domain equal to the codomain so that they are functions Such a transformation is often called a linear operator . One reason this is important is that we can then form equations relating vectors to their values. In particular, we may want to understand solutions to or Vectors satisfying the first equation are not changed by and those satisfying the second are flipped around . As it turns out, if some conditions are satisfied, we already have the tools to solve these equations and their generalizations.    -eigenvector  Eigenvector and eigenspace of a linear operator    Let be a linear operator. A non-zero vector is called an eigenvector of if there is a scalar in for which Any such scalar will be called an eigenvalue of . For a given , the vector subspace of solutions to equation is called the -eigenspace of .    We will often refer to eigenvectors and eigenvalues of matrices as well. When we do, we mean eigenvectors and eigenvalues of the linear transformation obtained by multiplying on the left by the matrix. Let us take a look at a few examples.   Diagonal matrices   Multiplying column vectors in by a diagonal matrix will give us eigenvalues with eigenvectors equal to the standard basis vectors .     Eigenvalues of a matrix   More generally, matrices often have eigenvalues that cannot be detected by merely looking at their entries. For example, the matrix has eigenvalues and (which don't seem to me like numbers that pop right out). Indeed, and While the zero vector appears on the right hand side of this equation, be very careful not to take it on the left ... the zero vector is not an eigenvector by definition (otherwise, every number would be an eigenvalue!).     Complex eigenvalues   The plot thickens even more when we consider our number system. For example, the very innocuous looking matrix has no eigenvalues or eigenvectors when thought of as a real matrix. In other words, there are no nonzero numbers and a real for which However, if we use the same matrix, but work over we see that and    These examples may lead the student to throw up their hands and exclaim that this whole business is too complicated and not worth the effort. However, I encourage them not to give up. What we get out of solving these problems is a slew of amazing and important applications! Let us first though state the problems to be solved:  Given a linear transformation on a finite dimensional vector space :    Eigenvalue Problem Find all eigenvalues of .   Eigenvector Problem For an eigenvalue , find all -eigenvectors.   Diagonalization Problem What conditions ensure that there is a basis of consisting of eigenvectors of ?     Eigenvalue Problem  To solve this problem, we first leverage the fact that the domain and codomain of are the same to define the determinant of .     Determinant of a linear operator    Given a finite dimensional vector space and a linear transformation , the determinant of , denoted , is the determinant of any matrix representing with respect to the same basis. I.e. for any basis of .    Of course, this definition may seem suspicious at first. As I have been emphasizing, an abstract vector space does not come with a basis, but rather one must choose a basis. So what happens if one person chooses a basis to compute and another chooses a different basis ? Students with great memories will recall equation and which showed that if and were two different matrix representations of the same linear transformation , then But then by we have So indeed, defining with either matrix gives the same quantity.  For the insightful philosophical student, simply justifying that this definition gives a well defined number may not be satisfying. They may reasonably ask why, if is a computation of volume and volume is a measure that can only be given in an inner product space, does it make sense to talk about for a linear transformation on an abstract vector space? What does this have to do with volume!? Well, the answer is that does not specify the volume of anything at all in , but it tells you exactly how much the volume of something changes if you apply . In particular, if you have a box in a real vector space , you may assign many different inner products to to produce many different values of . However, no matter how you do this, you will always get the equation  For the impatient student, going over all of this may be quite annoying and they may ask - why are you bothering me about this now ... what does this have to do with eigenvalues!?? To which I would say:    The number in is an eigenvalue of if and only if    We have that is an eigenvalue if and only if there is a non-zero in for which or equivalently if . But this is equivalent to saying that is in the kernel of . We know that this would happen if and only if is not a one-to-one transformation. Since is a linear transformation between spaces of the same dimension, shows that is not one-to-one if and only if it is not invertible. But this is the case if and only if any matrix representing it is not invertible which by can be true if and only if .    This proposition suggests the following definition.     Characteristic polynomial of a linear operator    If is a finite dimensional vector space, the characteristic polynomial of a linear transformation is given by     Here the variable is just that, a variable. You will show in the exercises that if then is always a degree polynomial. Thus then immediately yields.    If and is a linear transformation, there are at most eigenvalues of corresponding to roots of the characteristic polynomial .    As before, when is given by a representing matrix , we will write and talk about the characteristic polynomial of the matrix. To be certain we are not lost in abstraction, let us see that this polynomial can easily be computed.   Characteristic polynomial of a matrix I   Let us reconsider the case of multiplying by Subtracting from times the identity gives and taking determinant then produces For those that did not imagine how we could find the eigenvalues of and before, this polynomial should light a bit of a spark! By , the eigenvalues must solve the equation , or equivalently, be roots of .     Characteristic polynomial of a matrix II   On the other hand, we may consider multiplying by Here we get Solving the equation leads to the unimaginable which no one can really solve. Except complex people.    Now, we should mentioned that while what we have learned is progress, it also has limitations. The problem is that we have replaced our problem of finding eigenvalues with another problem of finding roots of a polynomial. For small matrices, this problem can be solved with complete accuracy and we will be pleased. However, for larger matrices we get higher degree polynomials. Finding exact roots of such polynomials can be an impossible task (although approximation methods exist). Nevertheless, we should not neglect the fact that we now have a much better understanding of what can happen. In particular, we cannot have infinitely many eigenvalues (in fact the number is bound by the dimension) and they all occur as roots of a polynomial coming directly from the transformation.    Eigenvector Problem  Having made great progress with our eigenvalue problem, we may ask some questions about the vectors that accompany them. A student with applications in mind may quickly ask: How do we find the -eigenvectors? to which I would respond : Solve a matrix equation!   Eigenvectors of a matrix   Let's consider a new computational example of multiplying by The first step to finding eigenvectors is to find the eigenvalues. To do this, we learned to find the characteristic polynomial One can check that is a root, divide by and factor to see that Thus we see that our eigenvalues are and . It is interesting to note that we have multiplicity here for the root which means that factors the polynomial. When you see this, your eyebrows should be raised and you should be on alert for unexpected phenomena.  To find the -eigenvectors, we simply solve the equation . Writing this out we are solving The reduced row echelon form of this matrix equation is just So we write a parametric solution with parameter (so as to not confuse it with the in the characteristic polynomial) In particular is a -eigenvector.  Repeating this process with the eigenvalue gives the equation with reduced row echelon form So we write a parametric solution In particular is a -eigenvector.    While this example was a delight to work through, it did raise a question. In general, we expect to obtain different roots to a degree polynomial. This would give us different eigenvectors in a dimensional space. It is natural to ask whether we get a basis from these vectors or not. It is also natural to ask what happened in this example... we only got two vectors!? These types of questions are all about diagonalization.    Diagonalization Problem  We now pick up the question of the eigenvectors of and whether we can form a basis from them. First, let's give such a collection a name.     Eigenbasis of a linear operator    A collection is called an eigenbasis for if it is a basis of eigenvectors of .    While it may seem at first that you will have to work hard to find an eigenbasis, the following proposition shows that, in many cases, we already know how to obtain one.    If are eigenvectors with distinct eigenvalues, then they are linearly independent.    Since are eigenvectors, they are all non-zero. So this means that is a linearly independent set. If is an eigenvalue, we will assume is its eigenvector. Let us keep going and say that is the largest number for which is linearly independent, but is linearly dependent. Then we know that there are numbers for which We note that these numbers must be unique , for otherwise, we could subtract the other relation and obtain Since the vectors are linearly independent, this would mean for each (showing they are unique).  However, we can apply to both sides of equation to obtain Since , we may divide and obtain Now, not all are zero for (otherwise would be a multiple of and a zero eigenvector), so there is at least one whose coefficient in equation has changed from to . But since these must be equal, we must have that which contradicts the assumption that all eigenvalues were distinct. This proves the lemma.    This lemma gives us a useful corollary.    If has distinct roots, then has an eigenbasis for .    The converse of this corollary is definitely false. For example, any basis of is an eigenbasis for the identity transformation which has .  One may ask why an eigenbasis is so useful. The answer is that if you have an eigenbasis, your linear transformation becomes very easy to understand. In particular, all your transformation is doing is scaling each coordinate corresponding to your basis vectors. We can understand this fact by representing with respect to an eigenbasis as the matrix .    If is an eigenbasis for the linear transformation with eigenvalues then    This follows from simply following the definition of . Indeed, we have But this means that the -th column of is , or, that .    This proposition and indeed the idea of representing linear transformations as matrices via bases, leads to a connection between eigenbases and diagonalization. Let us first define a diagonalizable matrix.     Diagonalizable matrix   A square matrix is diagonalizable if there is an invertible matrix such that    This definition most certainly will appear meaningless to the uninitiated as it leaves murky the main idea behind diagonalizable matrices. Namely, that there is a change of coordinates for which the linear transformation induced by is extremely simple. Let us pose this as a proposition.    Let be an matrix and the linear transformation associated to multiplying column vectors by . The matrix is diagonalizable by and if and only if has an eigenbasis where is a -eigenvector. Furthermore, if this is the case, then one can take so that the columns of are the eigenvectors .    If is diagonalizable then there is an invertible matrix as which satisfies the equation (by definition). Consider the set and notice that it is a basis of (since it is the image of the standard basis and is invertible). Also, we then have Showing that is an eigenbasis for .  Conversely, if has an eigenbasis , then shows that the representing matrix . Now, is also a matrix representing , but relative to the standard basis, so that if we write then . Taking to be the change of basis matrix from the standard basis to the eigenbasis, and using equation we see so that is diagonalizable.    Let us give an example that illustrates this proposition.     Consider diagonalizing the matrix This is in fact a bit of an undertaking, but we now know all of the steps. First, let us find the eigenvalues by obtaining the characteristic polynomial Thus the eigenvalues are the roots of . Now, generally at this point one may have to worry about the existence of an eigenbasis, but in our case we have distinct eigenvalues so that reassures us that we do indeed have an eigenbasis. Now we need only solve three linear equations to find it (as an aside: one could try to solve these simultaneously by row reducing with rational functions... but we will keep to our basic approach). First, we take and solve which has reduced row echelon form Leading to the -eigenvector Now taking gives which has reduced row echelon form leading to the -eigenvector Finally taking gives which has reduced row echelon form leading to the -eigenvector So we have achieved the goal of finding an eigenbasis!   But what about diagonalizing ? Well, here we apply , and in particular the last sentence where is identified as the change of basis matrix from the standard basis to the eigenbasis. But this means that is the matrix whose columns are the eigenvectors, so that Either using our determinant formula or through an augmented row reduction, we can calculate the inverse Finally, we encourage the student to compute and confirm     We end this section in blissful ignorance with a vague false hope that we can always diagonalize. Our dreams will be crushed next section, but a nuanced understanding will replace our Pollyanish viewpoint!    Let be a linear transformation of the vector space over . Explain your responses to:   True or False : If then has an eigenvalue.   True or False : If then has an eigenvalue.   True or False : This exercise is one of the main reasons to study complex numbers in this course.   The answer is `True' and you don't have to explain.    Recall that rotation matrices in are of the form Besides the identity matrix, are there any rotations which have real eigenvalues? Explain your response.    Note that if is any number in and is a degree polynomial that is a degree polynomial and has degree less than . Using this, explain why is a degree polynomial for an matrix.    Suppose are numbers in . Find the characteristic polynomial of the -matrix    Let    Find the eigenvalues of .   Is there an eigenbasis for ? Explain your response.   Find an eigenvector for each eigenvalue.   Find a matrix for which is a diagonal matrix (in other words, diagonalize ).    Diagonalize the matrix from when considered as a complex matrix.  Feel free to use numbers like and ... that's what they're there for!   "
},
{
  "id": "p-484",
  "level": "2",
  "url": "sec-diag1.html#p-484",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "linear operator "
},
{
  "id": "def-eigen",
  "level": "2",
  "url": "sec-diag1.html#def-eigen",
  "type": "Definition",
  "number": "4.1.1",
  "title": "",
  "body": "  -eigenvector  Eigenvector and eigenspace of a linear operator    Let be a linear operator. A non-zero vector is called an eigenvector of if there is a scalar in for which Any such scalar will be called an eigenvalue of . For a given , the vector subspace of solutions to equation is called the -eigenspace of .   "
},
{
  "id": "example-49",
  "level": "2",
  "url": "sec-diag1.html#example-49",
  "type": "Example",
  "number": "4.1.2",
  "title": "Diagonal matrices.",
  "body": " Diagonal matrices   Multiplying column vectors in by a diagonal matrix will give us eigenvalues with eigenvectors equal to the standard basis vectors .   "
},
{
  "id": "example-50",
  "level": "2",
  "url": "sec-diag1.html#example-50",
  "type": "Example",
  "number": "4.1.3",
  "title": "Eigenvalues of a <span class=\"process-math\">\\(2 \\times 2\\)<\/span> matrix.",
  "body": " Eigenvalues of a matrix   More generally, matrices often have eigenvalues that cannot be detected by merely looking at their entries. For example, the matrix has eigenvalues and (which don't seem to me like numbers that pop right out). Indeed, and While the zero vector appears on the right hand side of this equation, be very careful not to take it on the left ... the zero vector is not an eigenvector by definition (otherwise, every number would be an eigenvalue!).   "
},
{
  "id": "exa-Jmult",
  "level": "2",
  "url": "sec-diag1.html#exa-Jmult",
  "type": "Example",
  "number": "4.1.4",
  "title": "Complex eigenvalues.",
  "body": " Complex eigenvalues   The plot thickens even more when we consider our number system. For example, the very innocuous looking matrix has no eigenvalues or eigenvectors when thought of as a real matrix. In other words, there are no nonzero numbers and a real for which However, if we use the same matrix, but work over we see that and   "
},
{
  "id": "def-determinant2",
  "level": "2",
  "url": "sec-diag1.html#def-determinant2",
  "type": "Definition",
  "number": "4.1.5",
  "title": "",
  "body": "   Determinant of a linear operator    Given a finite dimensional vector space and a linear transformation , the determinant of , denoted , is the determinant of any matrix representing with respect to the same basis. I.e. for any basis of .   "
},
{
  "id": "prop-eigenvaluedet",
  "level": "2",
  "url": "sec-diag1.html#prop-eigenvaluedet",
  "type": "Proposition",
  "number": "4.1.6",
  "title": "",
  "body": "  The number in is an eigenvalue of if and only if    We have that is an eigenvalue if and only if there is a non-zero in for which or equivalently if . But this is equivalent to saying that is in the kernel of . We know that this would happen if and only if is not a one-to-one transformation. Since is a linear transformation between spaces of the same dimension, shows that is not one-to-one if and only if it is not invertible. But this is the case if and only if any matrix representing it is not invertible which by can be true if and only if .   "
},
{
  "id": "def-characteristicpolynomial",
  "level": "2",
  "url": "sec-diag1.html#def-characteristicpolynomial",
  "type": "Definition",
  "number": "4.1.7",
  "title": "",
  "body": "   Characteristic polynomial of a linear operator    If is a finite dimensional vector space, the characteristic polynomial of a linear transformation is given by    "
},
{
  "id": "cor-eigenvalues",
  "level": "2",
  "url": "sec-diag1.html#cor-eigenvalues",
  "type": "Corollary",
  "number": "4.1.8",
  "title": "",
  "body": "  If and is a linear transformation, there are at most eigenvalues of corresponding to roots of the characteristic polynomial .   "
},
{
  "id": "example-52",
  "level": "2",
  "url": "sec-diag1.html#example-52",
  "type": "Example",
  "number": "4.1.9",
  "title": "Characteristic polynomial of a <span class=\"process-math\">\\(2 \\times 2\\)<\/span> matrix I.",
  "body": " Characteristic polynomial of a matrix I   Let us reconsider the case of multiplying by Subtracting from times the identity gives and taking determinant then produces For those that did not imagine how we could find the eigenvalues of and before, this polynomial should light a bit of a spark! By , the eigenvalues must solve the equation , or equivalently, be roots of .   "
},
{
  "id": "example-53",
  "level": "2",
  "url": "sec-diag1.html#example-53",
  "type": "Example",
  "number": "4.1.10",
  "title": "Characteristic polynomial of a <span class=\"process-math\">\\(2 \\times 2\\)<\/span> matrix II.",
  "body": " Characteristic polynomial of a matrix II   On the other hand, we may consider multiplying by Here we get Solving the equation leads to the unimaginable which no one can really solve. Except complex people.   "
},
{
  "id": "exa-notdiagonalizable",
  "level": "2",
  "url": "sec-diag1.html#exa-notdiagonalizable",
  "type": "Example",
  "number": "4.1.11",
  "title": "Eigenvectors of a <span class=\"process-math\">\\(3 \\times 3\\)<\/span> matrix.",
  "body": " Eigenvectors of a matrix   Let's consider a new computational example of multiplying by The first step to finding eigenvectors is to find the eigenvalues. To do this, we learned to find the characteristic polynomial One can check that is a root, divide by and factor to see that Thus we see that our eigenvalues are and . It is interesting to note that we have multiplicity here for the root which means that factors the polynomial. When you see this, your eyebrows should be raised and you should be on alert for unexpected phenomena.  To find the -eigenvectors, we simply solve the equation . Writing this out we are solving The reduced row echelon form of this matrix equation is just So we write a parametric solution with parameter (so as to not confuse it with the in the characteristic polynomial) In particular is a -eigenvector.  Repeating this process with the eigenvalue gives the equation with reduced row echelon form So we write a parametric solution In particular is a -eigenvector.   "
},
{
  "id": "def-eigenbasis",
  "level": "2",
  "url": "sec-diag1.html#def-eigenbasis",
  "type": "Definition",
  "number": "4.1.12",
  "title": "",
  "body": "   Eigenbasis of a linear operator    A collection is called an eigenbasis for if it is a basis of eigenvectors of .   "
},
{
  "id": "lem-distincteigenlinind",
  "level": "2",
  "url": "sec-diag1.html#lem-distincteigenlinind",
  "type": "Lemma",
  "number": "4.1.13",
  "title": "",
  "body": "  If are eigenvectors with distinct eigenvalues, then they are linearly independent.    Since are eigenvectors, they are all non-zero. So this means that is a linearly independent set. If is an eigenvalue, we will assume is its eigenvector. Let us keep going and say that is the largest number for which is linearly independent, but is linearly dependent. Then we know that there are numbers for which We note that these numbers must be unique , for otherwise, we could subtract the other relation and obtain Since the vectors are linearly independent, this would mean for each (showing they are unique).  However, we can apply to both sides of equation to obtain Since , we may divide and obtain Now, not all are zero for (otherwise would be a multiple of and a zero eigenvector), so there is at least one whose coefficient in equation has changed from to . But since these must be equal, we must have that which contradicts the assumption that all eigenvalues were distinct. This proves the lemma.   "
},
{
  "id": "cor-distinctrootsdiag",
  "level": "2",
  "url": "sec-diag1.html#cor-distinctrootsdiag",
  "type": "Corollary",
  "number": "4.1.14",
  "title": "",
  "body": "  If has distinct roots, then has an eigenbasis for .   "
},
{
  "id": "prop-matrixrepeigen",
  "level": "2",
  "url": "sec-diag1.html#prop-matrixrepeigen",
  "type": "Proposition",
  "number": "4.1.15",
  "title": "",
  "body": "  If is an eigenbasis for the linear transformation with eigenvalues then    This follows from simply following the definition of . Indeed, we have But this means that the -th column of is , or, that .   "
},
{
  "id": "def-diagonalizable",
  "level": "2",
  "url": "sec-diag1.html#def-diagonalizable",
  "type": "Definition",
  "number": "4.1.16",
  "title": "",
  "body": "   Diagonalizable matrix   A square matrix is diagonalizable if there is an invertible matrix such that   "
},
{
  "id": "prop-diagonalize",
  "level": "2",
  "url": "sec-diag1.html#prop-diagonalize",
  "type": "Proposition",
  "number": "4.1.17",
  "title": "",
  "body": "  Let be an matrix and the linear transformation associated to multiplying column vectors by . The matrix is diagonalizable by and if and only if has an eigenbasis where is a -eigenvector. Furthermore, if this is the case, then one can take so that the columns of are the eigenvectors .    If is diagonalizable then there is an invertible matrix as which satisfies the equation (by definition). Consider the set and notice that it is a basis of (since it is the image of the standard basis and is invertible). Also, we then have Showing that is an eigenbasis for .  Conversely, if has an eigenbasis , then shows that the representing matrix . Now, is also a matrix representing , but relative to the standard basis, so that if we write then . Taking to be the change of basis matrix from the standard basis to the eigenbasis, and using equation we see so that is diagonalizable.   "
},
{
  "id": "example-55",
  "level": "2",
  "url": "sec-diag1.html#example-55",
  "type": "Example",
  "number": "4.1.18",
  "title": ".",
  "body": "   Consider diagonalizing the matrix This is in fact a bit of an undertaking, but we now know all of the steps. First, let us find the eigenvalues by obtaining the characteristic polynomial Thus the eigenvalues are the roots of . Now, generally at this point one may have to worry about the existence of an eigenbasis, but in our case we have distinct eigenvalues so that reassures us that we do indeed have an eigenbasis. Now we need only solve three linear equations to find it (as an aside: one could try to solve these simultaneously by row reducing with rational functions... but we will keep to our basic approach). First, we take and solve which has reduced row echelon form Leading to the -eigenvector Now taking gives which has reduced row echelon form leading to the -eigenvector Finally taking gives which has reduced row echelon form leading to the -eigenvector So we have achieved the goal of finding an eigenbasis!   But what about diagonalizing ? Well, here we apply , and in particular the last sentence where is identified as the change of basis matrix from the standard basis to the eigenbasis. But this means that is the matrix whose columns are the eigenvectors, so that Either using our determinant formula or through an augmented row reduction, we can calculate the inverse Finally, we encourage the student to compute and confirm    "
},
{
  "id": "exe-easytruefalse",
  "level": "2",
  "url": "sec-diag1.html#exe-easytruefalse",
  "type": "Exercise",
  "number": "4.1.4.1",
  "title": "",
  "body": "Let be a linear transformation of the vector space over . Explain your responses to:   True or False : If then has an eigenvalue.   True or False : If then has an eigenvalue.   True or False : This exercise is one of the main reasons to study complex numbers in this course.   The answer is `True' and you don't have to explain.  "
},
{
  "id": "exe-rotationdiag",
  "level": "2",
  "url": "sec-diag1.html#exe-rotationdiag",
  "type": "Exercise",
  "number": "4.1.4.2",
  "title": "",
  "body": " Recall that rotation matrices in are of the form Besides the identity matrix, are there any rotations which have real eigenvalues? Explain your response.  "
},
{
  "id": "exercise-66",
  "level": "2",
  "url": "sec-diag1.html#exercise-66",
  "type": "Exercise",
  "number": "4.1.4.3",
  "title": "",
  "body": " Note that if is any number in and is a degree polynomial that is a degree polynomial and has degree less than . Using this, explain why is a degree polynomial for an matrix.  "
},
{
  "id": "exe-higherorder",
  "level": "2",
  "url": "sec-diag1.html#exe-higherorder",
  "type": "Exercise",
  "number": "4.1.4.4",
  "title": "",
  "body": " Suppose are numbers in . Find the characteristic polynomial of the -matrix   "
},
{
  "id": "exercise-68",
  "level": "2",
  "url": "sec-diag1.html#exercise-68",
  "type": "Exercise",
  "number": "4.1.4.5",
  "title": "",
  "body": "Let    Find the eigenvalues of .   Is there an eigenbasis for ? Explain your response.   Find an eigenvector for each eigenvalue.   Find a matrix for which is a diagonal matrix (in other words, diagonalize ).  "
},
{
  "id": "exercise-69",
  "level": "2",
  "url": "sec-diag1.html#exercise-69",
  "type": "Exercise",
  "number": "4.1.4.6",
  "title": "",
  "body": " Diagonalize the matrix from when considered as a complex matrix.  Feel free to use numbers like and ... that's what they're there for! "
},
{
  "id": "sec-jnf",
  "level": "1",
  "url": "sec-jnf.html",
  "type": "Section",
  "number": "4.2",
  "title": "Jordan Normal Form",
  "body": " Jordan Normal Form  As it turns out, not every linear transformation has an eigenbasis, but there is something quite close. To describe it, we need to see that our direct sum is compatible with linear transformations in the following sense.     Direct sum of transformations    If , , and we write to be the linear transformation which takes to . Here the vectors and are the unique vectors in and respectively that add to .    It is fair to object to the messy look of this definition, but indeed, to understand the motivation for it, we consider what happens when we represent a direct sum of linear transformations as a matrix.    Suppose , , and are bases for , , and respectively, and let and . Then is a basis for , is a basis for and Here the matrix on the right is a matrix of matrices (so the zeros are matrices as well).    The proof of this proposition is elementary and is left to the student. However, the idea here is still important. We introduce direct sums because it allows us to decompose vector spaces into more elementary pieces (vector space summands) as well as decomposing linear transformations into more elementary linear transformations (blocks in the matrix).  Let us now return to the question of diagonalization and reconsider . Recall that there we examined the matrix We found the characteristic polynomial was so that there were eigenvalues and . However, since we don't have distinct roots of , we are no longer in the case of . This raises the question as to whether we can diagonalize at all or, equivalently, whether has an eigenbasis. Recall that we found the and eigenvectors by solving the eigenvector equations. If you look closely at those solutions though, you will see that any other eigenvector must be a multiple of one of these. But this means that the span of the eigenvectors is -dimensional, and we must conclude that there is no eigenbasis!  Let us look at another example where this occurs.   A nilpotent matrix   Consider the matrix One easily computes the characteristic polynomial to be . However, solving the equation gives that the only -eigenvectors are multiples of On the other hand, any other vector does satisfy the equation    This last equation leads to a definition.     Nilpotent operator    A linear operator is called nilpotent if there is a positive integer for which is the zero linear operator (i.e. for every vector ). We say is the order of if is not zero but is zero.    Nilpotent linear transformations can be quite useful, although they are also fairly rare. In one sense, though, they play nicely with invertible matrices (although they are, of course not invertible).    If is a linear isomorphism, is nilpotent and commutes with , then is a linear isomorphism.    The key to this observation is the geometric series that you learn in a first year calculus course. We can manipulate this slightly to see that Now, if we try to put random matrices (or linear transformations) in for and , we may run into trouble. First, we would of course need the matrix to be invertible to make sense of , but more importantly, we would need to know this series converged in some reasonable sense. However, if the matrix commuted with the matrix (which would imply did as well), then the terms Better yet, if the matrix were nilpotent, we would have no concern over convergence because these terms would all be zero once is large enough. Taking the matrix to represent and the matrix to represent thus shows that is invertible (and in fact the formula above can be used to compute the inverse).    The following lemma will be used to classify a normal form for nilpotent linear transformations. The proof of this lemma is fairly technical and can be skipped on first (or second) reading.    Suppose is nilpotent of order and is a vector for which . Let and . Then    is linearly independent and thus a basis for ,  there is a complementary subspace of for which where and are the restrictions of to and respectively.     To see the first claim, suppose Then by taking of both sides we see . Repeating with one sees that all must be zero as well implying is linearly independent.  For the second claim, let we argue by induction on . If then and one can take any complementary subspace to the span of . Since is zero on all of , it can be written as .  So assume the statement is true for and let . Then by the induction hypothesis we can find a complementary subspace to for which .  Let be the vector subspace of consisting of all vectors sent to and any complementary subspace of in which contains . We claim that satisfies the second statement. To check this claim we must verify that maps to itself under and that and are complementary. As is contained in , it maps to under which, by construction, is contained in .  Verifying that that and are complementary we first check that their intersection is zero. Note if is in both and then must be in and . But since these are complementary, we have and is in the kernel of . As we have . This implies is in and which consists only of .  To see that and span , suppose is any vector and consider . Then by the induction hypothesis, there is a unique decomposition with and . As we can take so that . Subtracting, this shows that so that is in . Thus for some number and (since ). Taking we get that is in the span finishing the proof.    Inductively applying this lemma gives the following corollary.    If is a finite dimensional vector space and a nilpotent linear transformation. Then there are vectors and positive integers such that is a basis and for .    This follows from repeatedly applying to the summand .    Now we return to the general problem of finding an eigenbasis for . Since we cannot always find a -eigenvectors of , we propose a broader notion in the following definition.    generalized -eigenspace  Generalized eigenspace of a linear operator    Suppose is a vector space and is a linear transformation. For a number , the generalized -eigenspace is the vector subspace A non-zero vector in is called a generalized eigenvector .    One can check that is indeed a vector subspace of . The following theorem can be used to see that the generalized eigenspaces are ever present.   Cayley-Hamilton   If is a finite dimensional vector space and is a linear transformation then .    We show this by taking to represent and verifying as a matrix equation. Suppose Letting be the matrix with polynomial entries, we can take its adjugate matrix since the entries are cofactors which can be defined on matrices with polynomial entries (since there is no division). Now, by equation we have that On the other hand, we can expand as matrices multiplied by monomials , i.e. Now, multiplying the left hand side of equation gives Setting the coefficients of equal to the right hand side for each gives the matrix equations Multiplying the first equation on the left by , the second by and so on gives Adding the left and right sides then gives    Let us interpret this Theorem. Since is a polynomial, it involves taking powers of , multiplying it by a scalar and adding the results together. However, all of these operations can be made on itself, so the equation says that we obtain the zero linear transformation when we put into its own characteristic polynomial.  To connect this definition to our discussion of nilpotent matrices, we observe the following simple Lemma.    Suppose is a finite dimensional vector space over and is a linear transformation. If and are two numbers in then and is nilpotent if and a linear isomorphism otherwise.    To see the first statement, just note that commutes with so that if then So if is in then so is .  For the second statement, if then is defined to be the vector subspace on which is nilpotent. There is a subtlety here which relies on the fact that is finite dimensional. In particular, there must be a finite for which for all  in owing to the fact that there is a finite basis for (check this). Thus is nilpotent on .  Now, if then we take and . Then and commute, is invertible and is nilpotent on . Applying gives that is invertible.    Using this lemma, we obtain a generalized version of .    Let be a finite dimensional vector space and be a linear transformation. If are generalized -eigenvectors with distinct , then they are linearly independent.    Assuming that this were false, we may choose a smallest set of eigenvalues for which there is a linear dependence of respective generalized eigenvectors. Relabel the vectors and eigenvalues so that this set consists of the first values . Then there are generalized -eigenvectors that have a non-trivial linear relation By , there is some for which is zero on and a linear isomorphism for each with . Write and apply this to both sides of the linear relation so that   We note that for all since is a linear isomorphism on . But this is a non-trivial linear dependence with fewer than generalized eigenvectors contradicting our choice of the smallest set of linearly dependent vectors.    From these lemmas we are able to show the following important theorem.    Suppose is an -dimensional vector space and is a linear transformation. Suppose factors as where for . Then decomposes as where and also decomposes as a direct sum of its restrictions    It is clear that maps each generalized eigenspace to itself. Taking  implies that Indeed, to check this one needs only show that there is no non-zero vector of equal to a sum of vectors from the other generalized eigenspaces. But any such equation would give a non-trivial linear relation.  To see the decomposition, all that is left to show is that . For this we use the Cayley-Hamilton Theorem. Indeed, if is a vector not in then because we have Write and recall that gives that is invertible on for . Take and observe it is in (since ) we can define in . But then it is clear that . Repeating this process gives vectors in with .  Restricting to to obtain one sees that where (since has no other eigenvalues). But it is an exercise to see that the direct sum decomposition gives a factorization so we may conclude that .    It is time to take a very deep breath and sigh loudly with relief. We have now proven the main theorem that allows us to represent any linear transformation as a completely understandable matrix! What type of matrices you ask?     Jordan matrix    For a number , a Jordan matrix is the matrix    And now for our classification.   Jordan Normal Form   Suppose is an -dimensional vector space and is a linear transformation. Suppose factors as where for . Then there is a basis of consisting of generalized eigenvectors for which the representing matrix is a block diagonal matrix The matrix represents the restriction of to the generalized eigenspace and itself has the block diagonal form Up to reordering the blocks, this form is unique.    The proof of the existence of such a basis for equation follows immediately from . On the other hand, one can verify equation by repeatedly applying to the nilpotent transformation on . The uniqueness claim is worth some attention, but will be left to the students and office hours!   Jordan normal form of a matrix   Let us now endeavor to work through an example with a little bit of nuance. Take One can compute the characteristic polynomial of this matrix as usual, or they can observe that it is a block lower triangular matrix with diagonal blocks and This implies that which simplifies our computation. We check that and so that Thus the eigenvalues of are and . gives us that and . So we first find a -eigenvector by solving the equation or One can find here that gives a non-trivial solution. For the generalized -eigenspace we consider the matrix which is The generalized -eigenspace has dimension , so is zero on this space (by the Cayley-Hamilton Theorem) and we can find a basis for it by simply solving the equation . However, this is not the most effective way at seeing the Jordan Normal Form. Instead, we will first find our -eigenspace by solving We can see that are linearly independent -eigenvectors. We can also see that these span our solution space to equation . This means that is not diagonalizable, but that there is a non-trivial Jordan block. To find it, we just need some vector that would be sent to one of the two -eigenvectors above by . Had I chosen my solutions above at random, there may not be such a vector and we would have to adjust the two eigenvectors so that one of them is in the image of . However, I have been judicious in my choice and we see that is indeed such a vector. Thus the basis will satisfy the requirements of . Indeed, taking to be the matrix with columns given by these vectors, we have Here we have two block matrices and with three Jordan matrices, in and in .      Let Without using row reduction or the determinant \/ adjugate formula, find the inverse of .    Let be restricted to the subspace in . Describe the matrix representing using the basis .   Give an example of a nilpotent matrix which has   a one dimensional kernel.   a two dimensional kernel.    True or False (with explanation) : If two linear transformations have the same characteristic polynomial, then they can be represented by the same matrix.   Let    Find the characteristic polynomial . What are the eigenvalues of ?   Find a maximal collection of linearly independent eigenvectors.   Is diagonalizable? Explain your response.   Find a basis for which is in Jordan Normal Form where is a change of basis matrix for .    "
},
{
  "id": "def-directsumtrans",
  "level": "2",
  "url": "sec-jnf.html#def-directsumtrans",
  "type": "Definition",
  "number": "4.2.1",
  "title": "",
  "body": "   Direct sum of transformations    If , , and we write to be the linear transformation which takes to . Here the vectors and are the unique vectors in and respectively that add to .   "
},
{
  "id": "proposition-24",
  "level": "2",
  "url": "sec-jnf.html#proposition-24",
  "type": "Proposition",
  "number": "4.2.2",
  "title": "",
  "body": "  Suppose , , and are bases for , , and respectively, and let and . Then is a basis for , is a basis for and Here the matrix on the right is a matrix of matrices (so the zeros are matrices as well).   "
},
{
  "id": "example-56",
  "level": "2",
  "url": "sec-jnf.html#example-56",
  "type": "Example",
  "number": "4.2.3",
  "title": "A <span class=\"process-math\">\\(2 \\times 2\\)<\/span> nilpotent matrix.",
  "body": " A nilpotent matrix   Consider the matrix One easily computes the characteristic polynomial to be . However, solving the equation gives that the only -eigenvectors are multiples of On the other hand, any other vector does satisfy the equation   "
},
{
  "id": "def-nilpotent",
  "level": "2",
  "url": "sec-jnf.html#def-nilpotent",
  "type": "Definition",
  "number": "4.2.4",
  "title": "",
  "body": "   Nilpotent operator    A linear operator is called nilpotent if there is a positive integer for which is the zero linear operator (i.e. for every vector ). We say is the order of if is not zero but is zero.   "
},
{
  "id": "lem-nilpotentinv",
  "level": "2",
  "url": "sec-jnf.html#lem-nilpotentinv",
  "type": "Lemma",
  "number": "4.2.5",
  "title": "",
  "body": "  If is a linear isomorphism, is nilpotent and commutes with , then is a linear isomorphism.    The key to this observation is the geometric series that you learn in a first year calculus course. We can manipulate this slightly to see that Now, if we try to put random matrices (or linear transformations) in for and , we may run into trouble. First, we would of course need the matrix to be invertible to make sense of , but more importantly, we would need to know this series converged in some reasonable sense. However, if the matrix commuted with the matrix (which would imply did as well), then the terms Better yet, if the matrix were nilpotent, we would have no concern over convergence because these terms would all be zero once is large enough. Taking the matrix to represent and the matrix to represent thus shows that is invertible (and in fact the formula above can be used to compute the inverse).   "
},
{
  "id": "lem-nilpotentdecomp",
  "level": "2",
  "url": "sec-jnf.html#lem-nilpotentdecomp",
  "type": "Lemma",
  "number": "4.2.6",
  "title": "",
  "body": "  Suppose is nilpotent of order and is a vector for which . Let and . Then    is linearly independent and thus a basis for ,  there is a complementary subspace of for which where and are the restrictions of to and respectively.     To see the first claim, suppose Then by taking of both sides we see . Repeating with one sees that all must be zero as well implying is linearly independent.  For the second claim, let we argue by induction on . If then and one can take any complementary subspace to the span of . Since is zero on all of , it can be written as .  So assume the statement is true for and let . Then by the induction hypothesis we can find a complementary subspace to for which .  Let be the vector subspace of consisting of all vectors sent to and any complementary subspace of in which contains . We claim that satisfies the second statement. To check this claim we must verify that maps to itself under and that and are complementary. As is contained in , it maps to under which, by construction, is contained in .  Verifying that that and are complementary we first check that their intersection is zero. Note if is in both and then must be in and . But since these are complementary, we have and is in the kernel of . As we have . This implies is in and which consists only of .  To see that and span , suppose is any vector and consider . Then by the induction hypothesis, there is a unique decomposition with and . As we can take so that . Subtracting, this shows that so that is in . Thus for some number and (since ). Taking we get that is in the span finishing the proof.   "
},
{
  "id": "corollary-8",
  "level": "2",
  "url": "sec-jnf.html#corollary-8",
  "type": "Corollary",
  "number": "4.2.7",
  "title": "",
  "body": "  If is a finite dimensional vector space and a nilpotent linear transformation. Then there are vectors and positive integers such that is a basis and for .    This follows from repeatedly applying to the summand .   "
},
{
  "id": "def-generalizedeigenvector",
  "level": "2",
  "url": "sec-jnf.html#def-generalizedeigenvector",
  "type": "Definition",
  "number": "4.2.8",
  "title": "",
  "body": "  generalized -eigenspace  Generalized eigenspace of a linear operator    Suppose is a vector space and is a linear transformation. For a number , the generalized -eigenspace is the vector subspace A non-zero vector in is called a generalized eigenvector .   "
},
{
  "id": "thm-cayleyhamilton",
  "level": "2",
  "url": "sec-jnf.html#thm-cayleyhamilton",
  "type": "Theorem",
  "number": "4.2.9",
  "title": "Cayley-Hamilton.",
  "body": " Cayley-Hamilton   If is a finite dimensional vector space and is a linear transformation then .    We show this by taking to represent and verifying as a matrix equation. Suppose Letting be the matrix with polynomial entries, we can take its adjugate matrix since the entries are cofactors which can be defined on matrices with polynomial entries (since there is no division). Now, by equation we have that On the other hand, we can expand as matrices multiplied by monomials , i.e. Now, multiplying the left hand side of equation gives Setting the coefficients of equal to the right hand side for each gives the matrix equations Multiplying the first equation on the left by , the second by and so on gives Adding the left and right sides then gives   "
},
{
  "id": "lem-nilpotentinvert",
  "level": "2",
  "url": "sec-jnf.html#lem-nilpotentinvert",
  "type": "Lemma",
  "number": "4.2.10",
  "title": "",
  "body": "  Suppose is a finite dimensional vector space over and is a linear transformation. If and are two numbers in then and is nilpotent if and a linear isomorphism otherwise.    To see the first statement, just note that commutes with so that if then So if is in then so is .  For the second statement, if then is defined to be the vector subspace on which is nilpotent. There is a subtlety here which relies on the fact that is finite dimensional. In particular, there must be a finite for which for all  in owing to the fact that there is a finite basis for (check this). Thus is nilpotent on .  Now, if then we take and . Then and commute, is invertible and is nilpotent on . Applying gives that is invertible.   "
},
{
  "id": "lem-distinctgeigenlinind",
  "level": "2",
  "url": "sec-jnf.html#lem-distinctgeigenlinind",
  "type": "Lemma",
  "number": "4.2.11",
  "title": "",
  "body": "  Let be a finite dimensional vector space and be a linear transformation. If are generalized -eigenvectors with distinct , then they are linearly independent.    Assuming that this were false, we may choose a smallest set of eigenvalues for which there is a linear dependence of respective generalized eigenvectors. Relabel the vectors and eigenvalues so that this set consists of the first values . Then there are generalized -eigenvectors that have a non-trivial linear relation By , there is some for which is zero on and a linear isomorphism for each with . Write and apply this to both sides of the linear relation so that   We note that for all since is a linear isomorphism on . But this is a non-trivial linear dependence with fewer than generalized eigenvectors contradicting our choice of the smallest set of linearly dependent vectors.   "
},
{
  "id": "lem-generalizedeigendecomp",
  "level": "2",
  "url": "sec-jnf.html#lem-generalizedeigendecomp",
  "type": "Theorem",
  "number": "4.2.12",
  "title": "",
  "body": "  Suppose is an -dimensional vector space and is a linear transformation. Suppose factors as where for . Then decomposes as where and also decomposes as a direct sum of its restrictions    It is clear that maps each generalized eigenspace to itself. Taking  implies that Indeed, to check this one needs only show that there is no non-zero vector of equal to a sum of vectors from the other generalized eigenspaces. But any such equation would give a non-trivial linear relation.  To see the decomposition, all that is left to show is that . For this we use the Cayley-Hamilton Theorem. Indeed, if is a vector not in then because we have Write and recall that gives that is invertible on for . Take and observe it is in (since ) we can define in . But then it is clear that . Repeating this process gives vectors in with .  Restricting to to obtain one sees that where (since has no other eigenvalues). But it is an exercise to see that the direct sum decomposition gives a factorization so we may conclude that .   "
},
{
  "id": "def-Jordanmatrix",
  "level": "2",
  "url": "sec-jnf.html#def-Jordanmatrix",
  "type": "Definition",
  "number": "4.2.13",
  "title": "",
  "body": "   Jordan matrix    For a number , a Jordan matrix is the matrix   "
},
{
  "id": "thm-jnf",
  "level": "2",
  "url": "sec-jnf.html#thm-jnf",
  "type": "Theorem",
  "number": "4.2.14",
  "title": "Jordan Normal Form.",
  "body": " Jordan Normal Form   Suppose is an -dimensional vector space and is a linear transformation. Suppose factors as where for . Then there is a basis of consisting of generalized eigenvectors for which the representing matrix is a block diagonal matrix The matrix represents the restriction of to the generalized eigenspace and itself has the block diagonal form Up to reordering the blocks, this form is unique.   "
},
{
  "id": "example-57",
  "level": "2",
  "url": "sec-jnf.html#example-57",
  "type": "Example",
  "number": "4.2.15",
  "title": "Jordan normal form of a <span class=\"process-math\">\\(4 \\times 4\\)<\/span> matrix.",
  "body": " Jordan normal form of a matrix   Let us now endeavor to work through an example with a little bit of nuance. Take One can compute the characteristic polynomial of this matrix as usual, or they can observe that it is a block lower triangular matrix with diagonal blocks and This implies that which simplifies our computation. We check that and so that Thus the eigenvalues of are and . gives us that and . So we first find a -eigenvector by solving the equation or One can find here that gives a non-trivial solution. For the generalized -eigenspace we consider the matrix which is The generalized -eigenspace has dimension , so is zero on this space (by the Cayley-Hamilton Theorem) and we can find a basis for it by simply solving the equation . However, this is not the most effective way at seeing the Jordan Normal Form. Instead, we will first find our -eigenspace by solving We can see that are linearly independent -eigenvectors. We can also see that these span our solution space to equation . This means that is not diagonalizable, but that there is a non-trivial Jordan block. To find it, we just need some vector that would be sent to one of the two -eigenvectors above by . Had I chosen my solutions above at random, there may not be such a vector and we would have to adjust the two eigenvectors so that one of them is in the image of . However, I have been judicious in my choice and we see that is indeed such a vector. Thus the basis will satisfy the requirements of . Indeed, taking to be the matrix with columns given by these vectors, we have Here we have two block matrices and with three Jordan matrices, in and in .   "
},
{
  "id": "exercise-70",
  "level": "2",
  "url": "sec-jnf.html#exercise-70",
  "type": "Exercise",
  "number": "4.2.1",
  "title": "",
  "body": " Let Without using row reduction or the determinant \/ adjugate formula, find the inverse of .  "
},
{
  "id": "exercise-71",
  "level": "2",
  "url": "sec-jnf.html#exercise-71",
  "type": "Exercise",
  "number": "4.2.2",
  "title": "",
  "body": " Let be restricted to the subspace in . Describe the matrix representing using the basis .  "
},
{
  "id": "exe-nilpotentmatrix",
  "level": "2",
  "url": "sec-jnf.html#exe-nilpotentmatrix",
  "type": "Exercise",
  "number": "4.2.3",
  "title": "",
  "body": "Give an example of a nilpotent matrix which has   a one dimensional kernel.   a two dimensional kernel.  "
},
{
  "id": "exercise-73",
  "level": "2",
  "url": "sec-jnf.html#exercise-73",
  "type": "Exercise",
  "number": "4.2.4",
  "title": "",
  "body": " True or False (with explanation) : If two linear transformations have the same characteristic polynomial, then they can be represented by the same matrix.  "
},
{
  "id": "exercise-74",
  "level": "2",
  "url": "sec-jnf.html#exercise-74",
  "type": "Exercise",
  "number": "4.2.5",
  "title": "",
  "body": "Let    Find the characteristic polynomial . What are the eigenvalues of ?   Find a maximal collection of linearly independent eigenvectors.   Is diagonalizable? Explain your response.   Find a basis for which is in Jordan Normal Form where is a change of basis matrix for .  "
},
{
  "id": "sec-spectral",
  "level": "1",
  "url": "sec-spectral.html",
  "type": "Section",
  "number": "4.3",
  "title": "The Spectral Theorem",
  "body": " The Spectral Theorem   The set of eigenvalues of a linear transformation is called its spectrum. This vocabulary comes from physics, where the operator in question is a quantized Hamiltonian and the eigenvalues are energies. Such energies for photons, the fundamental particles for light (and radiowaves), can be boiled down to their frequency and thus the term `spectrum'. However, this operator in quantum mechanics has to satisfy a special property - one that ensures it is diagonalizable. To even be able to state the property, we need our vector space to be an inner product space.  In fact, while we introduced inner product spaces as a way to work geometrically with vector spaces, the existence of an inner product gives us a huge amount of extra structure of which we have only scratched the surface. The following definition is an example of such structure.    generalized  Adjoint of a linear transformation    Let and be inner product spaces over with pairings and respectively. Given a linear transformation we say a linear transformation is its adjoint if, for any two vectors and we have    Let's consider a few standard examples.   Conjugate transpose as adjoint   Suppose and are inner product spaces with the product given in . Then any linear transformation from to can be seen as multiplying by an matrix . In this case, we have which is the conjugate of the transpose of .     Transpose as adjoint   Suppose and are inner product spaces with the dot product. Then it is not hard to show that    In fact, in the finite dimensional setting there is always an adjoint as the following proposition shows.    Let and be finite dimensional inner product spaces over . Given a linear transformation there is a unique adjoint    Choose orthonormal bases and for and respectively. Suppose represents with respect to these bases. then shows that the conjugate transpose represents .    To state and prove the Spectral Theorem in finite dimensions, we need one more notion.     Self-adjoint operator    Let be an inner product space, a linear transformation and its adjoint. We say that is self-adjoint if .    Let us make a few notes about this definition. First, this can be applied to infinite and finite dimensional vector spaces. Second, in the finite dimensional setting, we call  Hermitian if is defined over and symmetric if is defined over . This connects well to matrices where is said to be symmetric if (which would mean that it is self-adjoint as a transformation).  As it turns out, there are many situations in which the linear operator we are considering is self-adjoint. So it is perhaps a pleasant surprise that, in these cases, we have everything we could possibly desire!   Spectral Theorem   Let be a finite dimensional inner product space and a self-adjoint linear transformation. Then every eigenvalue of is a real number and there is an orthonormal eigenbasis for .    To see the claim on eigenvalues holds, we may assume that is defined over . If not, we represent as an -matrix using an orthonormal basis as in the proof of and observe that is symmetric with real entries and thus Hermitian. But then if is a -eigenvector we have that Dividing by we see that so that is real.  To see that has an eigenbasis, we need only show that any generalized eigenvector is actually an eigenvector. So suppose is an eigenvalue and is a generalized -eigenvector for which but . If this only happens for then we are done. So suppose and let . Then so that but This is a contradiction, thus every generalized eigenvector is an eigenvector and there is an eigenbasis (or equivalently, is diagonalizable).  Now, suppose and are distinct eigenvalues with eigenvectors and . Then Here the last line uses the fact that is real. Since we must have that or that the distinct eigenspaces are in fact orthogonal. This means that our generalized eigenspace decomposition is actually an eigenspace decomposition and any two such spaces are orthogonal. Choosing an orthonormal basis for each eigenspace and taking their union then produces an orthonormal eigenbasis of for .    Let us now consider two important applications of this theorem.    Quadratic Forms  We start with a definition.     Quadratic form    Let be an -dimensional vector space over . A quadratic form on is a function for which there exists numbers and a basis of for which    There are alternative definitions that do not depend on choosing a basis, but in any definition, one will be able to write out a quadratic form as above. Note that if is the matrix with entries and is the vector to be put in , we obtain the formula Like the determinant, a quadratic form is not a linear function, but rather strongly related to multilinear functions (as you will see in the proof of Sylvester's Law of Inertia). However, it is one you have certainly seen before in another guise called a conic section.   Quadratic forms in two dimensions   There are two examples of quadratic forms for that you see early in your mathematical education. We will write these as functions of two variables. The first is The level set of this quadratic form, which is defined as the set of points in the plane satisfying , is an ellipse. Another quadratic form you see is the similar looking The level set here being a hyperbola. Of course, there are others like but, as we will see using the Spectral Theorem, this can be made to be like one of our two prototypes above by changing coordinates.  We note here that instead of considering the level curves of these quadratic forms, we could consider their graphs In this case, we would obtain what are known as the paraboloid and hyperbolic paraboloid. We will revisit these graphs later on when we consider multivariable scalar functions.    Representing a quadratic form by a matrix as in equation depends on the basis , however, we can restrict our attention to certain types of matrices which change only in certain ways.    If is a quadratic form on , then for any basis of there is a unique symmetric matrix for which Furthermore, if is another basis, then there is an invertible matrix for which     For the first statement, we need only show there is a symmetric matrix as equation gives us the existence of some matrix. But is in fact a symmetric matrix (because it is ), so Another symmetric matrix that we can obtain from is Indeed, we see that To see that is the only symmetric matrix that will produce relative to the coordinates given by , one observes that the diagonal entries are obtained by and the off diagonal ones by .  To see the last statement about relating to , just note that if is a vector in with coordinates , with respect to and , then, letting be the change of coordinate matrix, we have which gives Now, by exercise the matrix is symmetric and since is the unique symmetric matrix for which we must have     Two matrices like and satisfying equation are called congruent . This lemma has a shocking corollary, which we will state as a theorem.   Sylvester's Law of Inertia   Let be a quadratic form on the inner product space on with the dot product. Then there are real numbers and an orthonormal basis for which, if are coordinates relative to , Furthermore, the number of 's that are negative, zero and positive depends only on the quadratic form (i.e. it does not depend on a choice of basis).    By , there is a unique symmetric matrix which represents relative to the standard basis. But the Spectral Theorem then says that   is diagonalizable,  the eigenvalues are all real,  there is an eigenbasis which is an orthonormal basis .  By the fact that is diagonalizable means where the columns of the matrix are the eigenvectors . But since these are orthonormal, we have that the matrix (check this by writing the rows of as and observing that the -entry of is the dot product of the -th row of with the -th column of ). Thus and implies that , relative to the basis , is represented by this diagonal matrix. Thus in this coordinate system,   The last statement is not directly implied by what we have above, since it is a statement about changing to any basis, not just orthonormal bases (and is the main point of Sylvester's law of inertia). To prove this last statement, consider the pairing It is not hard to show that satisfies conjugate symmetry (although the conjugate part is not important here because we are working with a real vector space) and linearity. It does not, however, always satisfy the positive definite property.  Suppose exactly of the eigenvalues are positive and order them so that these occur as the first ones and define the subspace . Observe that is in fact a positive definite pairing on because if is non-zero then Note also that (because is an orthonormal basis).  We claim that any vector subspace of on which is positive definite has dimension less than or equal to . Indeed, restricting the projection to gives a linear transformation Since , the Rank-Nullity Theorem says that if then there is a non-zero element in the kernel of . But the kernel of the projection map is so that is in the span of . Thus and This would contradict that is positive definite on . Thus is indeed the maximal dimension of a subspace on which is positive definite. Likewise, we can show that the number of negative 's is the largest dimension of a subspace on which is `negative definite' (i.e. on non-zero vectors). Finally, can be calculated as .    This surprising theorem has diverse and far reaching consequences as we will see later with second derivative tests. However, we can also use it to observe that often complicated looking formula are in fact just simple formulas made complicated by a change of coordinates.   Nice coordinates for a quadratic form   In , we wrote the quadratic form on . The matrix for this quadratic form with respect to the standard basis is Calculating the characteristic polynomial, we obtain Finding eigenvectors we solve and obtain which is orthogonal. Normalizing gives which can be used to obtain the change of basis matrix In this case, we can observe that . Now, in the orthonormal basis , we have coordinates Putting these into gives What have we done? Well, the coordinate system is just the ordinary Cartesian coordinates rotated by degrees. In this system, we have a standard ellipse with major axis the rotated -axis and minor axis the rotated -axis.    This last example shows a practical way of obtaining good coordinates when faced with a quadratic form, namely ones where the form is the sum of multiples of squares.    Covariance Matrices  When modelling a data set, one often will be considering a sample space with several variables. For example, if maple trees were our our data set, each maple tree may have a height, age, trunk diameter etc. We pick an order of such quantities once and for all so that we can numerically record any such sample as a vector in our vector space . Doing so with a large data set gives us a large number of vectors in and this is where we leave trees behind and math takes over.  Now, there are reasons to believe (in certain situations) that our data set should be distributed like an ellipse (or an ellipsoid for higher dimensions) around a central point. Such a distribution would be called a multivariate normal distribution. What is meant by `distributed' is that there is some (non-linear) function on which tells us of the probability that a sample point will be in a specific region of . Then for any probability between and , there will be ellipsoid ball around the mean in for which a sample occuring in that ball will have probability .  Let us first focus on the central point . This point, if it is the center, should be the average of all of our samples If you have some familiarity with basic statistics, you will know that finding the average (or mean) of a data set is only the first step in understanding your distribution of points. The second step is to find the variance, which when , is the average of the squares of the deviations from the mean. In other words, it can be calculated as This is actually the population variance, which will do for our purposes in one dimension. What it measures is how far away (or more precisely, the square of the distance away) a generic sample point is from the mean. However, we have by now realized our world is much richer with many dimensions and we should also note that the words `far away' indicate an inner product computation in many dimensions. So our notion of variance should also certainly be much richer in many dimensions and indeed it is.  To compute it, we simply take our sample space of shifted vectors, or vectors with respect to the mean, and make it into a very large matrix and write Let us observe a few things about this matrix. First, it is often written as rather than . We also note that the one dimensional case reproduces formula . Finally, one can check that this is an real symmetric matrix so that If this weren't good enough, it also has a positive semi-definite property. Namely, if is any vector in then So indeed, this covariance matrix is self-adjoint and, as you will show in an exercise, has only non-negative eigenvalues. This in particular means one can take unambiguous square roots of these eigenvalues (which are viewed as multivariable standard deviations). Thus there is an orthonormal eigenbasis for . The eigenvectors of this basis can be ordered so that the so that has the largest eigenvalue and the remaining eigenvalues are of decreasing values. Then in the coordinate system, our original data set can be seen as normally distributed about the mean with an ellipsoid with equation In this coordinate system, we can reduce dimensions to those eigenvectors with the largest eigenvalues (by projecting). Understanding and interpreting the data set in the eigenbasis coordinate system is an area in statistical applications known as principal component analysis .     Verify the claim in the proof of . In particular, show that if is the conjugate transpose of the matrix representing with respect to the orthonormal bases of and of , then is adjoint to .  Verify the adjoint equation for basis vectors and . Then appeal to linearity.   Two real -matrices and are called congruent if there is an invertible matrix with . Show that if is symmetric then so is every matrix congruent to .   Suppose one has the (extremely small) data set with vectors    Compute the mean of this data set.   Compute the covariance matrix of this data set.   Find eigenvalues and eigenvectors for the covariance matrix.   Sketch an ellipse describing the bivariate distribution of this data set.    Show that is positive semi-definite as in equation . Use this to show that it has only non-negative eigenvalues.    Let Find an orthonormal basis for so that in these coordinates Describe the conic section .    "
},
{
  "id": "eq-adjoint",
  "level": "2",
  "url": "sec-spectral.html#eq-adjoint",
  "type": "Definition",
  "number": "4.3.1",
  "title": "",
  "body": "  generalized  Adjoint of a linear transformation    Let and be inner product spaces over with pairings and respectively. Given a linear transformation we say a linear transformation is its adjoint if, for any two vectors and we have   "
},
{
  "id": "example-58",
  "level": "2",
  "url": "sec-spectral.html#example-58",
  "type": "Example",
  "number": "4.3.2",
  "title": "Conjugate transpose as adjoint.",
  "body": " Conjugate transpose as adjoint   Suppose and are inner product spaces with the product given in . Then any linear transformation from to can be seen as multiplying by an matrix . In this case, we have which is the conjugate of the transpose of .   "
},
{
  "id": "example-59",
  "level": "2",
  "url": "sec-spectral.html#example-59",
  "type": "Example",
  "number": "4.3.3",
  "title": "Transpose as adjoint.",
  "body": " Transpose as adjoint   Suppose and are inner product spaces with the dot product. Then it is not hard to show that   "
},
{
  "id": "prop-adjointexists",
  "level": "2",
  "url": "sec-spectral.html#prop-adjointexists",
  "type": "Proposition",
  "number": "4.3.4",
  "title": "",
  "body": "  Let and be finite dimensional inner product spaces over . Given a linear transformation there is a unique adjoint    Choose orthonormal bases and for and respectively. Suppose represents with respect to these bases. then shows that the conjugate transpose represents .   "
},
{
  "id": "eq-selfadjoint",
  "level": "2",
  "url": "sec-spectral.html#eq-selfadjoint",
  "type": "Definition",
  "number": "4.3.5",
  "title": "",
  "body": "   Self-adjoint operator    Let be an inner product space, a linear transformation and its adjoint. We say that is self-adjoint if .   "
},
{
  "id": "p-619",
  "level": "2",
  "url": "sec-spectral.html#p-619",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Hermitian symmetric "
},
{
  "id": "thm-spectral",
  "level": "2",
  "url": "sec-spectral.html#thm-spectral",
  "type": "Theorem",
  "number": "4.3.6",
  "title": "Spectral Theorem.",
  "body": " Spectral Theorem   Let be a finite dimensional inner product space and a self-adjoint linear transformation. Then every eigenvalue of is a real number and there is an orthonormal eigenbasis for .    To see the claim on eigenvalues holds, we may assume that is defined over . If not, we represent as an -matrix using an orthonormal basis as in the proof of and observe that is symmetric with real entries and thus Hermitian. But then if is a -eigenvector we have that Dividing by we see that so that is real.  To see that has an eigenbasis, we need only show that any generalized eigenvector is actually an eigenvector. So suppose is an eigenvalue and is a generalized -eigenvector for which but . If this only happens for then we are done. So suppose and let . Then so that but This is a contradiction, thus every generalized eigenvector is an eigenvector and there is an eigenbasis (or equivalently, is diagonalizable).  Now, suppose and are distinct eigenvalues with eigenvectors and . Then Here the last line uses the fact that is real. Since we must have that or that the distinct eigenspaces are in fact orthogonal. This means that our generalized eigenspace decomposition is actually an eigenspace decomposition and any two such spaces are orthogonal. Choosing an orthonormal basis for each eigenspace and taking their union then produces an orthonormal eigenbasis of for .   "
},
{
  "id": "def-quadform",
  "level": "2",
  "url": "sec-spectral.html#def-quadform",
  "type": "Definition",
  "number": "4.3.7",
  "title": "",
  "body": "   Quadratic form    Let be an -dimensional vector space over . A quadratic form on is a function for which there exists numbers and a basis of for which   "
},
{
  "id": "ex-conicsections",
  "level": "2",
  "url": "sec-spectral.html#ex-conicsections",
  "type": "Example",
  "number": "4.3.8",
  "title": "Quadratic forms in two dimensions.",
  "body": " Quadratic forms in two dimensions   There are two examples of quadratic forms for that you see early in your mathematical education. We will write these as functions of two variables. The first is The level set of this quadratic form, which is defined as the set of points in the plane satisfying , is an ellipse. Another quadratic form you see is the similar looking The level set here being a hyperbola. Of course, there are others like but, as we will see using the Spectral Theorem, this can be made to be like one of our two prototypes above by changing coordinates.  We note here that instead of considering the level curves of these quadratic forms, we could consider their graphs In this case, we would obtain what are known as the paraboloid and hyperbolic paraboloid. We will revisit these graphs later on when we consider multivariable scalar functions.   "
},
{
  "id": "lem-quadraticformmatrix",
  "level": "2",
  "url": "sec-spectral.html#lem-quadraticformmatrix",
  "type": "Lemma",
  "number": "4.3.9",
  "title": "",
  "body": "  If is a quadratic form on , then for any basis of there is a unique symmetric matrix for which Furthermore, if is another basis, then there is an invertible matrix for which     For the first statement, we need only show there is a symmetric matrix as equation gives us the existence of some matrix. But is in fact a symmetric matrix (because it is ), so Another symmetric matrix that we can obtain from is Indeed, we see that To see that is the only symmetric matrix that will produce relative to the coordinates given by , one observes that the diagonal entries are obtained by and the off diagonal ones by .  To see the last statement about relating to , just note that if is a vector in with coordinates , with respect to and , then, letting be the change of coordinate matrix, we have which gives Now, by exercise the matrix is symmetric and since is the unique symmetric matrix for which we must have    "
},
{
  "id": "p-635",
  "level": "2",
  "url": "sec-spectral.html#p-635",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "congruent "
},
{
  "id": "thm-sylvester",
  "level": "2",
  "url": "sec-spectral.html#thm-sylvester",
  "type": "Theorem",
  "number": "4.3.10",
  "title": "Sylvester's Law of Inertia.",
  "body": " Sylvester's Law of Inertia   Let be a quadratic form on the inner product space on with the dot product. Then there are real numbers and an orthonormal basis for which, if are coordinates relative to , Furthermore, the number of 's that are negative, zero and positive depends only on the quadratic form (i.e. it does not depend on a choice of basis).    By , there is a unique symmetric matrix which represents relative to the standard basis. But the Spectral Theorem then says that   is diagonalizable,  the eigenvalues are all real,  there is an eigenbasis which is an orthonormal basis .  By the fact that is diagonalizable means where the columns of the matrix are the eigenvectors . But since these are orthonormal, we have that the matrix (check this by writing the rows of as and observing that the -entry of is the dot product of the -th row of with the -th column of ). Thus and implies that , relative to the basis , is represented by this diagonal matrix. Thus in this coordinate system,   The last statement is not directly implied by what we have above, since it is a statement about changing to any basis, not just orthonormal bases (and is the main point of Sylvester's law of inertia). To prove this last statement, consider the pairing It is not hard to show that satisfies conjugate symmetry (although the conjugate part is not important here because we are working with a real vector space) and linearity. It does not, however, always satisfy the positive definite property.  Suppose exactly of the eigenvalues are positive and order them so that these occur as the first ones and define the subspace . Observe that is in fact a positive definite pairing on because if is non-zero then Note also that (because is an orthonormal basis).  We claim that any vector subspace of on which is positive definite has dimension less than or equal to . Indeed, restricting the projection to gives a linear transformation Since , the Rank-Nullity Theorem says that if then there is a non-zero element in the kernel of . But the kernel of the projection map is so that is in the span of . Thus and This would contradict that is positive definite on . Thus is indeed the maximal dimension of a subspace on which is positive definite. Likewise, we can show that the number of negative 's is the largest dimension of a subspace on which is `negative definite' (i.e. on non-zero vectors). Finally, can be calculated as .   "
},
{
  "id": "example-61",
  "level": "2",
  "url": "sec-spectral.html#example-61",
  "type": "Example",
  "number": "4.3.11",
  "title": "Nice coordinates for a quadratic form.",
  "body": " Nice coordinates for a quadratic form   In , we wrote the quadratic form on . The matrix for this quadratic form with respect to the standard basis is Calculating the characteristic polynomial, we obtain Finding eigenvectors we solve and obtain which is orthogonal. Normalizing gives which can be used to obtain the change of basis matrix In this case, we can observe that . Now, in the orthonormal basis , we have coordinates Putting these into gives What have we done? Well, the coordinate system is just the ordinary Cartesian coordinates rotated by degrees. In this system, we have a standard ellipse with major axis the rotated -axis and minor axis the rotated -axis.   "
},
{
  "id": "exe-adjointexists",
  "level": "2",
  "url": "sec-spectral.html#exe-adjointexists",
  "type": "Exercise",
  "number": "4.3.3.1",
  "title": "",
  "body": " Verify the claim in the proof of . In particular, show that if is the conjugate transpose of the matrix representing with respect to the orthonormal bases of and of , then is adjoint to .  Verify the adjoint equation for basis vectors and . Then appeal to linearity. "
},
{
  "id": "exe-congruent",
  "level": "2",
  "url": "sec-spectral.html#exe-congruent",
  "type": "Exercise",
  "number": "4.3.3.2",
  "title": "",
  "body": " Two real -matrices and are called congruent if there is an invertible matrix with . Show that if is symmetric then so is every matrix congruent to .  "
},
{
  "id": "exercise-77",
  "level": "2",
  "url": "sec-spectral.html#exercise-77",
  "type": "Exercise",
  "number": "4.3.3.3",
  "title": "",
  "body": "Suppose one has the (extremely small) data set with vectors    Compute the mean of this data set.   Compute the covariance matrix of this data set.   Find eigenvalues and eigenvectors for the covariance matrix.   Sketch an ellipse describing the bivariate distribution of this data set.  "
},
{
  "id": "exercise-78",
  "level": "2",
  "url": "sec-spectral.html#exercise-78",
  "type": "Exercise",
  "number": "4.3.3.4",
  "title": "",
  "body": " Show that is positive semi-definite as in equation . Use this to show that it has only non-negative eigenvalues.  "
},
{
  "id": "exercise-79",
  "level": "2",
  "url": "sec-spectral.html#exercise-79",
  "type": "Exercise",
  "number": "4.3.3.5",
  "title": "",
  "body": " Let Find an orthonormal basis for so that in these coordinates Describe the conic section .  "
},
{
  "id": "sec-paths",
  "level": "1",
  "url": "sec-paths.html",
  "type": "Section",
  "number": "5.1",
  "title": "Paths",
  "body": " Paths   We have now acquired a solid body of linear algebra knowledge. It's time to apply it to the non-linear world!    Curves vs. Paths  Recall that a path is defined to be a function   Here the domain is a (potentially infinite) interval in . A curve is the image of one or more paths. In this course, we distinguish between a path and a curve, although some texts refer to paths as `parameterized curves', which is a more explicit description of what they are - a path gives a (connected) curve a (non-linear) coordinate or parameter. Let us formalize this notion.     Parameterized curve    Given a curve in a vector space , we say that  parameterizes  if it is one-to-one and its range is (except possibly at the endpoints). If is a connected interval , or , we will say that is a connected curve.    There are three common notations we will encounter. If or , we may write respectively. It is also very common to see these written out as row vectors with the notation In the general case, we will write In this setting, it is common to write the path as and we often use this instead of in this case. Let us take a look at some common curves and their parameterizations.   Parameterizing an ellipse   For a fixed positive real number , the path will be used frequently as it parameterizes the circle of radius centered at the origin. In this case, the circle is the curve and is a path. Of course, here we would take the domain of to be an interval like or . A variant of this is the path This parameterizes the ellipse given by     Before giving the next example, let's define a line!     Line in a vector space    Given a non-zero real vector space , a line in is any subset which equals the translation of a one-dimensional vector subspace in .    The reason for including the translation is that vector subspaces always pass through the origin and we often want to consider lines which do not. Of course, we will consider translating by as an option, so lines passing through the origin do count as lines!   Parameterizing lines   A quick look at will confirm that a line in is indeed a curve, not a path. It does not come with any given parameterization. However, it does assert that there must be a vector and a one dimensional subspace such that Given this information, we actually can parameterize by choosing a basis (or in this case, a single non-zero vector) of . Indeed, once we do this, we consider the function Since every vector in is uniquely written as a multiple for some , this will be a one-to-one correspondence from to our line . This is called in some texts the vector parameterization of , is called the initial vector , and is called the direction vector . Of course, we could have chosen a non-zero multiple of as our direction vector and would be another path parameterizing . Again, paths parameterizing the same curve may be different!    We recall the discussion from about the fact that in the path setting, we assign a number to each point of the curve. So the path has much more information in it than the curve. In some ways, this information is useful because we can compute. But often, we are not as interested in the extra information as we are the curve itself. For example, we may want to know the length of the curve which does not depend on our parameterization.  In many ways, this difference is analogous to the difference between a real -dimensional vector space and . The former is something we may be interested in, but the latter is something we can compute with. A basis of gives us a way of parameterizing with coordinates in and studying important features. But enough reminiscing, back to paths!    Tangent Vectors of Paths  All of the notation conventions for paths are with respect to paths with codomain (or ), but we will promote this a bit by taking our codomain to be an arbitrary inner product space over and considering paths to be vector valued functions of one variable (which usually will be ) Thus will be a vector in dependent on a `time' parameter . Of course, for finite dimensional real inner product spaces with a choice of basis, a path in this sense can be written with coordinates using the basis, and we may freely go back and forth once such a basis is chosen. In particular, we will often use the form of equation in examples and exercises as it is where we can compute most effectively.  However, in some contexts it is helpful to keep the flexibility of working over complex numbers or without a predetermined choice of basis. In particular, some results and definitions are best expressed without these constraints. Here is an example.     Arithmetic of paths    If , are paths in the inner product space over , a vector space over , a linear transformation, and is a scalar, then   defines the sum of two paths,   defines the pairing of two paths and gives a scalar function of ,   is the path of the composition of with .     Thus we can do vector arithmetic on paths and compute angles and distances between paths (at varying times). However, the main ingredient that an inner product provides that allows for us to start doing calculus is distance. This is because without it (or a more general form of it called a topology), we cannot make sense of the following notion.     Velocity and tangent vector of a path    Let be an interval in with in its interior and a path in . The tangent vector or velocity vector of at is If this is well defined at all in , we will say that is differentiable and write for the path of tangent vectors .    The tangent vector at is also sometimes written as (although we will refrain from using this notation to avoid confusion with vectors in ). It is also very common to see it written as or,  Now, I ask that the student look carefully at equation and consider what is within the limit, namely For a given (note that is fixed), the object inside the parentheses is the difference of two vectors in , so it is a vector in . We are scalar multiplying this by the non-zero real scalar . So altogether this expression is a vector for any . In fact, it is a rescaled the displacement vector from at time to at time .  In fact, if and were our one variable function, this definition would simply be which every red blooded high school student knows as the derivative!  But as was mentioned above, the key ingredient that we need to make sense of the definition for higher dimensions is the inner product (which gives us a definition of distance, and in turn, for the limit). Right now, this is just a comment and I ask students to make a mental note of it and consider reading through an introductory analysis book to gather a more in depth understanding of limits in many dimensions. Suffice it to say, many results that we had in one variable carry over to many variables. In particular, we have the following two very useful propositions.    Taking tangent vectors is a linear operation. Concretely, if and are differentiable at and is a scalar (complex or real) then is differentiable at and Moreover, if is a differentiable function to , is a vector in (not dependent on ) and , then     The proof of this fact follows from some basic analysis, so we will omit these details.    We also have the proposition.    Suppose is a finite dimensional vector space and is a path in defined on an interval around . Then:  If is differentiable at then is differentiable at for every linear dual .  If is a basis of the dual space and is differentiable at for each then so is . Moreover, if form the dual basis then       We should read this last proposition in the following way. Part (1) says that if a path is differentiable, then its coordinate functions are differentiable for any coordinate system you choose. Part (2) is a converse to this - it says if the coordinates of in any given basis are differentiable functions of , then so is and furthermore the tangent vector has coordinates that are derivatives of the coordinates. Let us write this as a corollary which is really just a rephrasing of part (2).    If is differentiable at then    With a little help of some basic analysis, we can prove . By the fact that a dual vector is a continuous function, a linear scalar function is a continuous map which implies that composing commutes with limits. But finding the tangent vector is such a limit and we see that Thus, if is differentiable, then the left hand side exists which implies the right exists as well.  On the other hand, assume the right hand side exists for a basis of dual vectors . The have a dual basis as in equation and any vector has the unique expression This is also true for so we have Now, the existence of the derivatives of the coordinate functions and gives     With in hand, we can calculate tangent vectors confidently.   Computing tangent vectors   Suppose Its tangent vector can be computed by taking derivatives of the components so that This example illustrates the more general application of , if is a path in and you want to find its tangent vector, you need only take derivatives of the coordinate functions and you are done.    Certainly, being able to compute tangent vectors is useful, but so is knowing that our prior rules and results still hold.   Product Rule for Paths   If is a differentiable scalar valued function and are differentiable paths, then            For the first statement, we simply write in coordinates for some basis and differentiate using . The second statement is proved similarly and is left to the student.     Chain Rule for Paths   If is a finite dimensional inner product space, and intervals in , a differentiable function, and a differentiable path, then    The proof is left as an exercise.      The Geometry of Curves  There is much to say about the geometry of curves, and here we will define only a few important notions, saving for later a more detailed discussion.     Speed of a path    A differentiable path has speed  at .    Note that speed and velocity are two different (but related) concepts. In particular, velocity is a vector, while speed is a non-negative scalar.   Speed of a parameterized helix   To find the speed of the helix we first find the velocity and take the magnitude     Just as in one variable calculus, we will wish to talk about vectors being `tangent' to a curve (and latter a surface or subspace).    generalized  Tangent line to curve    Let be a curve. We say a vector is tangent to at if there is a differentiable parameterization so that and is a scalar multiple of . The tangent line to is the line where is the subspace of tangent vectors to at .     Tangent line to a hyperbola   Consider the positive branch of the hyperbola It was seen in that this branch is parameterized by the hyperbolic trigonometric functions via To write down a parametric equation for the tangent line to the curve at, say, , we need only find the tangent vector and use this as the direction vector to obtain     A can be useful to have a tangent vector to a curve which is a unit vector. This can be accomplished by normalizing the tangent vector. In fact, such a vector has a name.     Unit tangent vector    The unit tangent vector  to a curve at a point is a unit vector which is tangent to at . We call the function which assigns a point of to its unit tangent vector the unit vector frame of .    If the curve is parameterized by , we may write instead of .   Finding the unit vector frame   To find unit vectors of the helix from , we simply normalize the velocity vector by dividing by the speed.     One of the reasons to consider unit tangent vectors is that they give us ways of projecting other vectors along the curve at a point. We will see this approach when we integrate along curves later on.     Give a path parameterizing the line in which passes through the vectors and .   Find the tangent vectors of the following paths   where .   where .   Compare your answers by relating to via the real linear isomorphism Explain your findings.    Consider a slightly more general case than the previous exercise. Suppose is a complex number. Show that   Find the speed and unit tangent vectors for the following paths   where ..   where .    Prove .    Suppose is a differentiable path that parameterizes and . We can reparameterize by composing with another differentiable function with . Suppose and write for the new parametrization. Show that the tangent vectors and are linearly dependent. This shows that a curve only has a tangent line (not a plane).    The acceleration vector of a twice differentiable path is . We say that a curve is arc length parameterized by if the speed of is for all . Show that if is an arc length parameterization then its velocity and acceleration are orthogonal. In other words, show that for every .    "
},
{
  "id": "p-659",
  "level": "2",
  "url": "sec-paths.html#p-659",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "curve "
},
{
  "id": "def-parameterizecurve",
  "level": "2",
  "url": "sec-paths.html#def-parameterizecurve",
  "type": "Definition",
  "number": "5.1.1",
  "title": "",
  "body": "   Parameterized curve    Given a curve in a vector space , we say that  parameterizes  if it is one-to-one and its range is (except possibly at the endpoints). If is a connected interval , or , we will say that is a connected curve.   "
},
{
  "id": "example-62",
  "level": "2",
  "url": "sec-paths.html#example-62",
  "type": "Example",
  "number": "5.1.2",
  "title": "Parameterizing an ellipse.",
  "body": " Parameterizing an ellipse   For a fixed positive real number , the path will be used frequently as it parameterizes the circle of radius centered at the origin. In this case, the circle is the curve and is a path. Of course, here we would take the domain of to be an interval like or . A variant of this is the path This parameterizes the ellipse given by    "
},
{
  "id": "def-line",
  "level": "2",
  "url": "sec-paths.html#def-line",
  "type": "Definition",
  "number": "5.1.3",
  "title": "",
  "body": "   Line in a vector space    Given a non-zero real vector space , a line in is any subset which equals the translation of a one-dimensional vector subspace in .   "
},
{
  "id": "example-63",
  "level": "2",
  "url": "sec-paths.html#example-63",
  "type": "Example",
  "number": "5.1.4",
  "title": "Parameterizing lines.",
  "body": " Parameterizing lines   A quick look at will confirm that a line in is indeed a curve, not a path. It does not come with any given parameterization. However, it does assert that there must be a vector and a one dimensional subspace such that Given this information, we actually can parameterize by choosing a basis (or in this case, a single non-zero vector) of . Indeed, once we do this, we consider the function Since every vector in is uniquely written as a multiple for some , this will be a one-to-one correspondence from to our line . This is called in some texts the vector parameterization of , is called the initial vector , and is called the direction vector . Of course, we could have chosen a non-zero multiple of as our direction vector and would be another path parameterizing . Again, paths parameterizing the same curve may be different!   "
},
{
  "id": "def-patharith",
  "level": "2",
  "url": "sec-paths.html#def-patharith",
  "type": "Definition",
  "number": "5.1.5",
  "title": "",
  "body": "   Arithmetic of paths    If , are paths in the inner product space over , a vector space over , a linear transformation, and is a scalar, then   defines the sum of two paths,   defines the pairing of two paths and gives a scalar function of ,   is the path of the composition of with .    "
},
{
  "id": "def-tangentvector",
  "level": "2",
  "url": "sec-paths.html#def-tangentvector",
  "type": "Definition",
  "number": "5.1.6",
  "title": "",
  "body": "   Velocity and tangent vector of a path    Let be an interval in with in its interior and a path in . The tangent vector or velocity vector of at is If this is well defined at all in , we will say that is differentiable and write for the path of tangent vectors .   "
},
{
  "id": "prop-pathderivativelinear",
  "level": "2",
  "url": "sec-paths.html#prop-pathderivativelinear",
  "type": "Proposition",
  "number": "5.1.7",
  "title": "",
  "body": "  Taking tangent vectors is a linear operation. Concretely, if and are differentiable at and is a scalar (complex or real) then is differentiable at and Moreover, if is a differentiable function to , is a vector in (not dependent on ) and , then     The proof of this fact follows from some basic analysis, so we will omit these details.   "
},
{
  "id": "prop-differentiablepath",
  "level": "2",
  "url": "sec-paths.html#prop-differentiablepath",
  "type": "Proposition",
  "number": "5.1.8",
  "title": "",
  "body": "  Suppose is a finite dimensional vector space and is a path in defined on an interval around . Then:  If is differentiable at then is differentiable at for every linear dual .  If is a basis of the dual space and is differentiable at for each then so is . Moreover, if form the dual basis then      "
},
{
  "id": "cor-computetangent",
  "level": "2",
  "url": "sec-paths.html#cor-computetangent",
  "type": "Corollary",
  "number": "5.1.9",
  "title": "",
  "body": "  If is differentiable at then    With a little help of some basic analysis, we can prove . By the fact that a dual vector is a continuous function, a linear scalar function is a continuous map which implies that composing commutes with limits. But finding the tangent vector is such a limit and we see that Thus, if is differentiable, then the left hand side exists which implies the right exists as well.  On the other hand, assume the right hand side exists for a basis of dual vectors . The have a dual basis as in equation and any vector has the unique expression This is also true for so we have Now, the existence of the derivatives of the coordinate functions and gives    "
},
{
  "id": "example-64",
  "level": "2",
  "url": "sec-paths.html#example-64",
  "type": "Example",
  "number": "5.1.10",
  "title": "Computing tangent vectors.",
  "body": " Computing tangent vectors   Suppose Its tangent vector can be computed by taking derivatives of the components so that This example illustrates the more general application of , if is a path in and you want to find its tangent vector, you need only take derivatives of the coordinate functions and you are done.   "
},
{
  "id": "prop-productrulepaths",
  "level": "2",
  "url": "sec-paths.html#prop-productrulepaths",
  "type": "Proposition",
  "number": "5.1.11",
  "title": "Product Rule for Paths.",
  "body": " Product Rule for Paths   If is a differentiable scalar valued function and are differentiable paths, then            For the first statement, we simply write in coordinates for some basis and differentiate using . The second statement is proved similarly and is left to the student.   "
},
{
  "id": "prop-chainrulepaths",
  "level": "2",
  "url": "sec-paths.html#prop-chainrulepaths",
  "type": "Proposition",
  "number": "5.1.12",
  "title": "Chain Rule for Paths.",
  "body": " Chain Rule for Paths   If is a finite dimensional inner product space, and intervals in , a differentiable function, and a differentiable path, then    The proof is left as an exercise.   "
},
{
  "id": "def-speed",
  "level": "2",
  "url": "sec-paths.html#def-speed",
  "type": "Definition",
  "number": "5.1.13",
  "title": "",
  "body": "   Speed of a path    A differentiable path has speed  at .   "
},
{
  "id": "exa-helix",
  "level": "2",
  "url": "sec-paths.html#exa-helix",
  "type": "Example",
  "number": "5.1.14",
  "title": "Speed of a parameterized helix.",
  "body": " Speed of a parameterized helix   To find the speed of the helix we first find the velocity and take the magnitude    "
},
{
  "id": "def-tangenttocurve",
  "level": "2",
  "url": "sec-paths.html#def-tangenttocurve",
  "type": "Definition",
  "number": "5.1.15",
  "title": "",
  "body": "  generalized  Tangent line to curve    Let be a curve. We say a vector is tangent to at if there is a differentiable parameterization so that and is a scalar multiple of . The tangent line to is the line where is the subspace of tangent vectors to at .   "
},
{
  "id": "example-66",
  "level": "2",
  "url": "sec-paths.html#example-66",
  "type": "Example",
  "number": "5.1.16",
  "title": "Tangent line to a hyperbola.",
  "body": " Tangent line to a hyperbola   Consider the positive branch of the hyperbola It was seen in that this branch is parameterized by the hyperbolic trigonometric functions via To write down a parametric equation for the tangent line to the curve at, say, , we need only find the tangent vector and use this as the direction vector to obtain    "
},
{
  "id": "def-unittangentvect",
  "level": "2",
  "url": "sec-paths.html#def-unittangentvect",
  "type": "Definition",
  "number": "5.1.17",
  "title": "",
  "body": "   Unit tangent vector    The unit tangent vector  to a curve at a point is a unit vector which is tangent to at . We call the function which assigns a point of to its unit tangent vector the unit vector frame of .   "
},
{
  "id": "example-67",
  "level": "2",
  "url": "sec-paths.html#example-67",
  "type": "Example",
  "number": "5.1.18",
  "title": "Finding the unit vector frame.",
  "body": " Finding the unit vector frame   To find unit vectors of the helix from , we simply normalize the velocity vector by dividing by the speed.    "
},
{
  "id": "exercise-80",
  "level": "2",
  "url": "sec-paths.html#exercise-80",
  "type": "Exercise",
  "number": "5.1.4.1",
  "title": "",
  "body": " Give a path parameterizing the line in which passes through the vectors and .  "
},
{
  "id": "exercise-81",
  "level": "2",
  "url": "sec-paths.html#exercise-81",
  "type": "Exercise",
  "number": "5.1.4.2",
  "title": "",
  "body": "Find the tangent vectors of the following paths   where .   where .   Compare your answers by relating to via the real linear isomorphism Explain your findings.  "
},
{
  "id": "exe-derivativeexp",
  "level": "2",
  "url": "sec-paths.html#exe-derivativeexp",
  "type": "Exercise",
  "number": "5.1.4.3",
  "title": "",
  "body": " Consider a slightly more general case than the previous exercise. Suppose is a complex number. Show that  "
},
{
  "id": "exercise-83",
  "level": "2",
  "url": "sec-paths.html#exercise-83",
  "type": "Exercise",
  "number": "5.1.4.4",
  "title": "",
  "body": "Find the speed and unit tangent vectors for the following paths   where ..   where .  "
},
{
  "id": "exercise-84",
  "level": "2",
  "url": "sec-paths.html#exercise-84",
  "type": "Exercise",
  "number": "5.1.4.5",
  "title": "",
  "body": " Prove .  "
},
{
  "id": "exercise-85",
  "level": "2",
  "url": "sec-paths.html#exercise-85",
  "type": "Exercise",
  "number": "5.1.4.6",
  "title": "",
  "body": " Suppose is a differentiable path that parameterizes and . We can reparameterize by composing with another differentiable function with . Suppose and write for the new parametrization. Show that the tangent vectors and are linearly dependent. This shows that a curve only has a tangent line (not a plane).  "
},
{
  "id": "exercise-86",
  "level": "2",
  "url": "sec-paths.html#exercise-86",
  "type": "Exercise",
  "number": "5.1.4.7",
  "title": "",
  "body": " The acceleration vector of a twice differentiable path is . We say that a curve is arc length parameterized by if the speed of is for all . Show that if is an arc length parameterization then its velocity and acceleration are orthogonal. In other words, show that for every .  "
},
{
  "id": "sec-lincode1",
  "level": "1",
  "url": "sec-lincode1.html",
  "type": "Section",
  "number": "5.2",
  "title": "Linear Constant Coefficient ODE I",
  "body": " Linear Constant Coefficient ODE I  In this section, we will look at and solve our first non-trivial ordinary differential equation. First though, we recall what it is that we are trying to solve. Quite generally, let be a finite dimensional inner product space and be a collection of functions, one for every in some interval . This collection should be thought of as a time varying vector field , which we will study in later sections. The general ordinary differential equation can be written For the moment, we consider the meaning of this equation when is independent of time (the so-called autonomous differential equation). For any point , we can then picture as a vector with initial point at . Indeed, we write for a copy of the vector space at and call this the tangent space of at (we do this for every vector in ). We then illustrate as a collection of different tangent vectors, one for each point in the the domain of . This is called a vector field . We can use sage to illustrate this perspective and graph a vector field. Evaluate the sage cell to see a two dimensional example. Or evaluate this cell to see a three dimensional example. Now, consider a solution to equation . Such a path will have its tangent vector at time precisely equal to the vector field at the position . In simple terms, the path is following the flow of the field - at each point, its direction and speed are determined by . A particular solution to this equation is simply some path that satisfies this equation. However, just as is the case with solving a linear system of equations, we can ask for a general solution which will include parameters and give all solutions to our equation. Sadly, for most ODEs, finding any closed form solution is out of the question. Nonetheless, we will see a theorem assuring us that a solution exists (under some mild conditions on ) and that, once the initial condition is fixed, this solution is unique. Let us state this last fact as a theorem that will be proved later.   Uniqueness of Solutions to ODEs   Suppose and solve equation under suitable conditions and , then .    The suitable conditions mentioned in this theorem concern differentiability of , which we will study in the coming sections. As was mentioned, finding closed solutions to a general ODE can be difficult to impossible. However, the situation changes if we restrict our attention to only certain types of functions .     Homogeneous linear constant coefficient ordinary differential equation    Given a finite dimensional inner product space over , a homogeneous linear constant coefficient ordinary differential equation is an equation of the form for some linear transformation .    Note that the linear transformation is not changing with respect to the independent variable of . The advantage of having done sufficient linear algebra prior to this equation now becomes clear. We can solve this equation immediately by understanding its solution for the case where can be represented as a Jordan block. After that, we simply add solutions together for the general case.    Suppose is represented as a Jordan block with respect to the basis . For any let be the path defined by Letting the general solution to is for scalars . This is the unique solution with initial condition    To prove this, we need only show that is a solution with the correct initial condition. Indeed, as our initial condition can be any vector in , any other solution would have to be of this form by . To do this, we compute the tangent vectors Here we take . This, along with and the product rule for paths gives On the other hand, as , we have that This with linearity gives Again using linearity we have This shows that solves the ODE for each . As both sides are linear in paths, we can take any linear combination of these solutions to get another one (note that this is not the case for any ODE and results from the homogeneous condition). Thus the path in equation~ is a solution.    Of course, if we can decompose into block diagonals of the form above, we need only add the resulting solutions.    If is an inner product space and is a linear transformation with characteristic polynomial , then there are sets of vectors whose union is a basis for and for which is represented as a Jordan block for . Any solution to can be obtained by solving it as in for each and adding the resulting paths together. Such a solution will be called a -eigenspace solution.    The following theorem is an immediate corollary of these lemmas.    Let be a finite dimensional inner product space and a linear transformation with characteristic polynomial Let be the decomposition of into generalized eigenspaces so that . Then every solution to can be uniquely written as a linear combination where is a -eigenspace solution to    In the next section, we will give a tremendous number of detailed examples illustrating the power of this result and approach.    Suppose the matrix is diagonalizable and If denotes a path in , what is the general solution to the differentiable equation You may write your answer using .   Let and a path in .   Write out the differential equation as three differential equations in and .   Give the particular solution to the differential equation with initial conditions     "
},
{
  "id": "p-717",
  "level": "2",
  "url": "sec-lincode1.html#p-717",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "vector field tangent space vector field particular solution general solution "
},
{
  "id": "thm-uniqueode",
  "level": "2",
  "url": "sec-lincode1.html#thm-uniqueode",
  "type": "Theorem",
  "number": "5.2.1",
  "title": "Uniqueness of Solutions to ODEs.",
  "body": " Uniqueness of Solutions to ODEs   Suppose and solve equation under suitable conditions and , then .   "
},
{
  "id": "def-hlccode",
  "level": "2",
  "url": "sec-lincode1.html#def-hlccode",
  "type": "Definition",
  "number": "5.2.2",
  "title": "",
  "body": "   Homogeneous linear constant coefficient ordinary differential equation    Given a finite dimensional inner product space over , a homogeneous linear constant coefficient ordinary differential equation is an equation of the form for some linear transformation .   "
},
{
  "id": "lem-solveodejb",
  "level": "2",
  "url": "sec-lincode1.html#lem-solveodejb",
  "type": "Lemma",
  "number": "5.2.3",
  "title": "",
  "body": "  Suppose is represented as a Jordan block with respect to the basis . For any let be the path defined by Letting the general solution to is for scalars . This is the unique solution with initial condition    To prove this, we need only show that is a solution with the correct initial condition. Indeed, as our initial condition can be any vector in , any other solution would have to be of this form by . To do this, we compute the tangent vectors Here we take . This, along with and the product rule for paths gives On the other hand, as , we have that This with linearity gives Again using linearity we have This shows that solves the ODE for each . As both sides are linear in paths, we can take any linear combination of these solutions to get another one (note that this is not the case for any ODE and results from the homogeneous condition). Thus the path in equation~ is a solution.   "
},
{
  "id": "lem-eigensol",
  "level": "2",
  "url": "sec-lincode1.html#lem-eigensol",
  "type": "Lemma",
  "number": "5.2.4",
  "title": "",
  "body": "  If is an inner product space and is a linear transformation with characteristic polynomial , then there are sets of vectors whose union is a basis for and for which is represented as a Jordan block for . Any solution to can be obtained by solving it as in for each and adding the resulting paths together. Such a solution will be called a -eigenspace solution.   "
},
{
  "id": "thm-generallinearhomogeneoussol",
  "level": "2",
  "url": "sec-lincode1.html#thm-generallinearhomogeneoussol",
  "type": "Theorem",
  "number": "5.2.5",
  "title": "",
  "body": "  Let be a finite dimensional inner product space and a linear transformation with characteristic polynomial Let be the decomposition of into generalized eigenspaces so that . Then every solution to can be uniquely written as a linear combination where is a -eigenspace solution to   "
},
{
  "id": "exercise-87",
  "level": "2",
  "url": "sec-lincode1.html#exercise-87",
  "type": "Exercise",
  "number": "5.2.1",
  "title": "",
  "body": " Suppose the matrix is diagonalizable and If denotes a path in , what is the general solution to the differentiable equation You may write your answer using .  "
},
{
  "id": "exercise-88",
  "level": "2",
  "url": "sec-lincode1.html#exercise-88",
  "type": "Exercise",
  "number": "5.2.2",
  "title": "",
  "body": "Let and a path in .   Write out the differential equation as three differential equations in and .   Give the particular solution to the differential equation with initial conditions   "
},
{
  "id": "sec-lincode2",
  "level": "1",
  "url": "sec-lincode2.html",
  "type": "Section",
  "number": "5.3",
  "title": "Linear Constant Coefficient ODE II",
  "body": " Linear Constant Coefficient ODE II  Having solved homogeneous constant coefficient linear ODE's in principal, we now consider it in practice. It will definitely be helpful for a student to consult online resources and programs, which are plentiful, to visualize the examples in this section. We will approach these equations computationally and geometrically for this section. Some examples applications will be mentioned towards the end of this section and in the exercises. For each solution, we will want to have the following steps or accomplishments in order to feel good about our final assessment.   Translate the differential equation or equations into a single matrix differential equation   Draw the vector field or graph it with a computer (or obtain it by understanding the Jordan Normal Form of ).  Find a basis for which is in Jordan Normal Form.  Use to write the general solution to the equation.  Given an initial condition find the particular solution to the equation.   Now let us go over several examples.   One real dimensional equation   The first case we saw way back in . Consider the equation Here, our vector space is just itself. The vector field is given by Geometrically, this means at , there is a vector pointing away from the origin with three times the magnitude as . Also, our matrix is the matrix . Of course, we learn in calculus (or in ) that solves this equation generally with initial condition . Were we to think of this in terms of Jordon blocks, we would note that is a Jordon block itself and the equation above is just . There is one thing to note about our solution and that is that it experiences exponential growth as . Were we to start with the equation instead, we would see exponential decay. Understanding the long term behavior of a solution to a differential equation gives valuable qualitative information on the system you are studying.     Two real dimensional equation   Now let us consider an authentically higher dimensional example. Our first task in this linear ODE is to write it as a single matrix ODE. We can do this by looking at the coefficients on the right and making a matrix out of them as in Then if we take we obtain the equation The right hand side is indeed our vector field and to obtain a computational advantage and a geometric picture, it will help to diagonalize (if possible). For this, we start by taking the characteristic polynomial of (which we will write now with variable instead of to avoid confusion with ) and find Thus we see two distinct real eigenvalues and can confidently diagonalize . Indeed, working through this gives the -eigenvector and -eigenvector which form an eigenbasis Why is all this so helpful? Well, now we can picture the vector field very clearly. It will take vectors on the eigenspace (multiples of ) and reverse their direction. On the -eigenspace though (multiples of ), the vectors will be doubled in scale and point in the same direction. The remaining vectors can be seen to be a linear combination of these two. This geometry will be sketched in class and gives a fantastically simple picture of what our solutions ought to look like.  But what about computing solutions? Well, now that we have an eigenbasis we can write in terms of the eigenbasis But, of course, in this basis the differential equation becomes much simpler So in particular, our linear system breaks into two independent equations The solutions to these equations are similar to and we obtain with initial condition Of course, while the solution is especially pleasant in the eigenbasis, the original problem came to us in terms of the standard basis, so we must be translate our solution into the usual set of coordinates in order to please our engineering colleagues. If the initial condition were given in the standard basis as we would need the change of basis matrix to find and as above. This is just the inverse of the matrix with columns equal to and so it is and we have Putting all of this together, we obtain the general solution with respect to the standard basis.    To see geometrically, you may evaluate the sage cell to see an illustration. The -eigenspace is drawn as the red line and the -eigenspace is the purple line. Along the red line the solution follows a path to the origin because, on this axis in the eigenbasis coordinates, the solution looks like On the purple line however, the solution follows the path away from the origin with In between these axes a solution near the red line will flow toward the origin and eventually curve to follow the purple line out to infinity.  This last example shows how easy things become if the matrix is diagonalizable with real eigenvalues. In fact, it is an illustration of for the case when there are two Jordan blocks. However, since we are also acquainted with complex numbers, we note that differential equations involving real paths can sometimes be helped along by thinking of them as landing in a complex vector space instead. The next example illustrates this point.   Complex eigenvalues in the equation   Suppose we take the linear differential equation Writing this out we find the matrix and obtain the equation Again, the right hand side is the vector field and it would be nice to diagonalize to get a picture of this field. However, computing the characteristic polynomial gives One can use the quadratic formula here and see that so that the roots of are complex numbers and cannot be diagonalized as a real matrix. Now, one of the benefits of having real eigenvalues and eigenvectors was that we obtained a nice picture of the vector field. There is something to be said in the case of a complex eigenvector as well, which is related to several of the exercises that you have worked through. In particular, if there is an eigenvalue of the form , then one will see a rotation in the vectors of the vector field (in some coordinate system). For now, we will leave the illustration of this field to a computer and come back to the geometry once we've found the solution.  To compute the general solution, there are several ways to proceed, but we will take a principled approach and simply say that our path was a function to all along so that Now we can diagonalize because the eigenvalues are distinct. A bit of computation gives the eigenbasis Again, we can write our solution in terms of this basis and again, in this basis the differential equation becomes much simpler This time, the two independent equations are It is here that comes into view and we realize that, in fact, we've already solved these equations and obtained So, were we inclined to write our solutions in terms of the basis in , we would have solved the differential equation with I can hear the overwhelming chorus of objections to this solution from engineer and mathematician alike. After all, the constants and are possibly complex numbers and the function is too. We started in the real plane and have ended in what appears to be a terrifying -dimensional mess (since is real dimensions). Well, I contend that appearances can be deceiving! Let's unwind this a bit with a few simple observations.  The first thing to recognize about our solution is that the basis which we chose had a hidden symmetry. Namely, if we take the complex conjugate of we obtain so that Now, the solution we obtain for will be real, which means it equals its conjugate. Thus But since our coefficients are unique, we have that Putting our solution in to this equation gives Even more helpful, we note that for any complex number we can get the real and imaginary parts of by simply checking that Using this, equations and gives Now, note that is zero only for the zero solution, so assuming it is not zero, we can find an so that in polar coordinates This gives us a nice way to rewrite our solution as Pulling out the real and imaginary parts, we obtain a very real looking solution To finish the solution, one would have to solve and for an initial condition but this will be left as a linear algebra exercise for the student (which can be done in multiple ways).  However, it is interesting to note here that the solution can be written The scaling factor increases exponentially which means that the solution will head off to infinity. What about the vector portion? Well, it is not hard to see that this is a parameterization of the conic section A meticulous student will check and see that this equation is that of a (rotated) ellipse. So the solution is simply following a parameterization of an ellipse, but scaling it simultaneously and spiraling away from the origin.    We will generalize and summarize the previous result as a Theorem.    Suppose is a diagonalizable real matrix . Then the eigenvalues of can be partitioned into the real eigenvalues and pairs of complex numbers . There is also an eigenbasis Solutions to the differential equation are real linear combinations of the functions for and     Another two dimensional equation   Now let us consider Jordan normal form example. Here our matrix is And we obtain the equation We check that Thus we see has only as an eigenvalue. Since is not a diagonal matrix, we may conclude that it is not diagonalizable (this is only true because it has one eigenvalue). We consider the matrix and generate a basis of the form by taking . Here we obtain Now we have a basis for which we can directly apply . Here we get And the general solution with initial conditions in terms of the basis is with initial condition If the initial condition were given in the standard basis as we would need the change of basis matrix which is just the inverse of the matrix with columns equal to and so it is and we have Putting all of this together, we obtain the general solution with respect to the standard basis.    As an important application of our general solution, we consider higher order homogeneous constant coefficient ODE's. Suppose we are confronted with a scalar valued function of a variable , but now with an equation Here we recall that is the -th derivative of with respect to (so we will assume our functions are differentiable enough). There are two equivalent ways of approaching the solution to this equation. The first and most common way is to guess the solution and solve the resulting polynomial equation This polynomial is called the characteristic polynomial of the ODE . Indeed, any solution will give a corresponding solution to the equation. If is a multiple root of the characteristic polynomial, then one guesses again with and finds (so long as is less than the order of the root) that we have found another solution. Hobbling these solutions together, one can solve equations where now our initial conditions are not just , but also .  The solution can also be found using our tools, which has the added benefit of simplifying the higher order equation into a first order equation (a technique that is used frequently in classical mechanics). To force equation into a first order equation, rewrite it as a collection of equations Notice that if , then the first equations are just saying that for each . The last equation is then just equation . Letting and writing this as the single matrix equation forces us to use the matrix In , you showed that the characteristic polynomial of is simply Thus the characteristic polynomial of the ODE is the same as the characteristic polynomial of our matrix. If is a root of , it is easy to check that is a -eigenvector of . In the event that has multiplicity , one can also check that is a basis for the generalized -eigenspace . A less complicated expression for (and more useful) is Moreover, it is a basis of the form so that it may be used to give the Jordan normal form of and via to find the general solution.  Let us give an example of this which we will study in more depth next section.     Consider the case of where and .  This differential equation describes the motion of a mass on the end of a spring. The mass is , spring constant (which describes how tight the spring is) and damping constant is (which describes the amount of kinetic friction). Dividing by gives where and . Converting to a matrix equation gives with characteristic polynomial Using the quadratic formula, we obtain the roots Of which there are two main cases (and one case we will ignore). Let and notice that (with equality when there is no damping), and . The first case we have in which case the roots of the characteristic polynomial are with eigenbasis Using , we see that solutions then are linear combinations of the solutions Recalling that the first coordinate is the scalar solution to the original second order differential equation, we obtain with initial conditions Of course, if the point has polar coordinate , then the trigonometric sum formulas will give the simpler formula Thus when we see some oscillation in the spring-mass system. Notice that if there is no damping and , then the spring-mass system simply oscillates with amplitude and period (often called in applications). On the other hand, if there is damping, this oscillation's amplitude experiences exponential decay.  The case where gives the real roots One notes that both and are negative numbers (since ). Thus here our solution is This is solution experiences exponential decay and the spring-mass system is called overdamped . The reason is that the kinetic friction force is overcoming the spring force and simply slowing the mass to a stop before oscillation occurs. The initial conditions here are       Go through the five steps for the system of differential equations     Go through the five steps for the system of differential equations     Go through the five steps for the system of differential equations     Give three linearly independent solutions to the differential equation    Verify the claim that the basis in equation gives a Jordan block (i.e. is of the form in equation ).    Find the motion of a spring-mass system with mass , spring constant and damping constant assuming and .    "
},
{
  "id": "exa-1varlinode",
  "level": "2",
  "url": "sec-lincode2.html#exa-1varlinode",
  "type": "Example",
  "number": "5.3.1",
  "title": "One real dimensional equation.",
  "body": " One real dimensional equation   The first case we saw way back in . Consider the equation Here, our vector space is just itself. The vector field is given by Geometrically, this means at , there is a vector pointing away from the origin with three times the magnitude as . Also, our matrix is the matrix . Of course, we learn in calculus (or in ) that solves this equation generally with initial condition . Were we to think of this in terms of Jordon blocks, we would note that is a Jordon block itself and the equation above is just . There is one thing to note about our solution and that is that it experiences exponential growth as . Were we to start with the equation instead, we would see exponential decay. Understanding the long term behavior of a solution to a differential equation gives valuable qualitative information on the system you are studying.   "
},
{
  "id": "ex-lineardiagonalode",
  "level": "2",
  "url": "sec-lincode2.html#ex-lineardiagonalode",
  "type": "Example",
  "number": "5.3.2",
  "title": "Two real dimensional equation.",
  "body": " Two real dimensional equation   Now let us consider an authentically higher dimensional example. Our first task in this linear ODE is to write it as a single matrix ODE. We can do this by looking at the coefficients on the right and making a matrix out of them as in Then if we take we obtain the equation The right hand side is indeed our vector field and to obtain a computational advantage and a geometric picture, it will help to diagonalize (if possible). For this, we start by taking the characteristic polynomial of (which we will write now with variable instead of to avoid confusion with ) and find Thus we see two distinct real eigenvalues and can confidently diagonalize . Indeed, working through this gives the -eigenvector and -eigenvector which form an eigenbasis Why is all this so helpful? Well, now we can picture the vector field very clearly. It will take vectors on the eigenspace (multiples of ) and reverse their direction. On the -eigenspace though (multiples of ), the vectors will be doubled in scale and point in the same direction. The remaining vectors can be seen to be a linear combination of these two. This geometry will be sketched in class and gives a fantastically simple picture of what our solutions ought to look like.  But what about computing solutions? Well, now that we have an eigenbasis we can write in terms of the eigenbasis But, of course, in this basis the differential equation becomes much simpler So in particular, our linear system breaks into two independent equations The solutions to these equations are similar to and we obtain with initial condition Of course, while the solution is especially pleasant in the eigenbasis, the original problem came to us in terms of the standard basis, so we must be translate our solution into the usual set of coordinates in order to please our engineering colleagues. If the initial condition were given in the standard basis as we would need the change of basis matrix to find and as above. This is just the inverse of the matrix with columns equal to and so it is and we have Putting all of this together, we obtain the general solution with respect to the standard basis.   "
},
{
  "id": "ex-lineardiagonalode2",
  "level": "2",
  "url": "sec-lincode2.html#ex-lineardiagonalode2",
  "type": "Example",
  "number": "5.3.3",
  "title": "Complex eigenvalues in the equation.",
  "body": " Complex eigenvalues in the equation   Suppose we take the linear differential equation Writing this out we find the matrix and obtain the equation Again, the right hand side is the vector field and it would be nice to diagonalize to get a picture of this field. However, computing the characteristic polynomial gives One can use the quadratic formula here and see that so that the roots of are complex numbers and cannot be diagonalized as a real matrix. Now, one of the benefits of having real eigenvalues and eigenvectors was that we obtained a nice picture of the vector field. There is something to be said in the case of a complex eigenvector as well, which is related to several of the exercises that you have worked through. In particular, if there is an eigenvalue of the form , then one will see a rotation in the vectors of the vector field (in some coordinate system). For now, we will leave the illustration of this field to a computer and come back to the geometry once we've found the solution.  To compute the general solution, there are several ways to proceed, but we will take a principled approach and simply say that our path was a function to all along so that Now we can diagonalize because the eigenvalues are distinct. A bit of computation gives the eigenbasis Again, we can write our solution in terms of this basis and again, in this basis the differential equation becomes much simpler This time, the two independent equations are It is here that comes into view and we realize that, in fact, we've already solved these equations and obtained So, were we inclined to write our solutions in terms of the basis in , we would have solved the differential equation with I can hear the overwhelming chorus of objections to this solution from engineer and mathematician alike. After all, the constants and are possibly complex numbers and the function is too. We started in the real plane and have ended in what appears to be a terrifying -dimensional mess (since is real dimensions). Well, I contend that appearances can be deceiving! Let's unwind this a bit with a few simple observations.  The first thing to recognize about our solution is that the basis which we chose had a hidden symmetry. Namely, if we take the complex conjugate of we obtain so that Now, the solution we obtain for will be real, which means it equals its conjugate. Thus But since our coefficients are unique, we have that Putting our solution in to this equation gives Even more helpful, we note that for any complex number we can get the real and imaginary parts of by simply checking that Using this, equations and gives Now, note that is zero only for the zero solution, so assuming it is not zero, we can find an so that in polar coordinates This gives us a nice way to rewrite our solution as Pulling out the real and imaginary parts, we obtain a very real looking solution To finish the solution, one would have to solve and for an initial condition but this will be left as a linear algebra exercise for the student (which can be done in multiple ways).  However, it is interesting to note here that the solution can be written The scaling factor increases exponentially which means that the solution will head off to infinity. What about the vector portion? Well, it is not hard to see that this is a parameterization of the conic section A meticulous student will check and see that this equation is that of a (rotated) ellipse. So the solution is simply following a parameterization of an ellipse, but scaling it simultaneously and spiraling away from the origin.   "
},
{
  "id": "thm-diagonalizableODE",
  "level": "2",
  "url": "sec-lincode2.html#thm-diagonalizableODE",
  "type": "Theorem",
  "number": "5.3.4",
  "title": "",
  "body": "  Suppose is a diagonalizable real matrix . Then the eigenvalues of can be partitioned into the real eigenvalues and pairs of complex numbers . There is also an eigenbasis Solutions to the differential equation are real linear combinations of the functions for and   "
},
{
  "id": "ex-lineardiagonalode3",
  "level": "2",
  "url": "sec-lincode2.html#ex-lineardiagonalode3",
  "type": "Example",
  "number": "5.3.5",
  "title": "Another two dimensional equation.",
  "body": " Another two dimensional equation   Now let us consider Jordan normal form example. Here our matrix is And we obtain the equation We check that Thus we see has only as an eigenvalue. Since is not a diagonal matrix, we may conclude that it is not diagonalizable (this is only true because it has one eigenvalue). We consider the matrix and generate a basis of the form by taking . Here we obtain Now we have a basis for which we can directly apply . Here we get And the general solution with initial conditions in terms of the basis is with initial condition If the initial condition were given in the standard basis as we would need the change of basis matrix which is just the inverse of the matrix with columns equal to and so it is and we have Putting all of this together, we obtain the general solution with respect to the standard basis.   "
},
{
  "id": "p-747",
  "level": "2",
  "url": "sec-lincode2.html#p-747",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "characteristic polynomial of the ODE "
},
{
  "id": "ex-springmass",
  "level": "2",
  "url": "sec-lincode2.html#ex-springmass",
  "type": "Example",
  "number": "5.3.6",
  "title": ".",
  "body": "   Consider the case of where and .  This differential equation describes the motion of a mass on the end of a spring. The mass is , spring constant (which describes how tight the spring is) and damping constant is (which describes the amount of kinetic friction). Dividing by gives where and . Converting to a matrix equation gives with characteristic polynomial Using the quadratic formula, we obtain the roots Of which there are two main cases (and one case we will ignore). Let and notice that (with equality when there is no damping), and . The first case we have in which case the roots of the characteristic polynomial are with eigenbasis Using , we see that solutions then are linear combinations of the solutions Recalling that the first coordinate is the scalar solution to the original second order differential equation, we obtain with initial conditions Of course, if the point has polar coordinate , then the trigonometric sum formulas will give the simpler formula Thus when we see some oscillation in the spring-mass system. Notice that if there is no damping and , then the spring-mass system simply oscillates with amplitude and period (often called in applications). On the other hand, if there is damping, this oscillation's amplitude experiences exponential decay.  The case where gives the real roots One notes that both and are negative numbers (since ). Thus here our solution is This is solution experiences exponential decay and the spring-mass system is called overdamped . The reason is that the kinetic friction force is overcoming the spring force and simply slowing the mass to a stop before oscillation occurs. The initial conditions here are    "
},
{
  "id": "exercise-89",
  "level": "2",
  "url": "sec-lincode2.html#exercise-89",
  "type": "Exercise",
  "number": "5.3.1",
  "title": "",
  "body": " Go through the five steps for the system of differential equations   "
},
{
  "id": "exercise-90",
  "level": "2",
  "url": "sec-lincode2.html#exercise-90",
  "type": "Exercise",
  "number": "5.3.2",
  "title": "",
  "body": " Go through the five steps for the system of differential equations   "
},
{
  "id": "exercise-91",
  "level": "2",
  "url": "sec-lincode2.html#exercise-91",
  "type": "Exercise",
  "number": "5.3.3",
  "title": "",
  "body": " Go through the five steps for the system of differential equations   "
},
{
  "id": "exercise-92",
  "level": "2",
  "url": "sec-lincode2.html#exercise-92",
  "type": "Exercise",
  "number": "5.3.4",
  "title": "",
  "body": " Give three linearly independent solutions to the differential equation  "
},
{
  "id": "exercise-93",
  "level": "2",
  "url": "sec-lincode2.html#exercise-93",
  "type": "Exercise",
  "number": "5.3.5",
  "title": "",
  "body": " Verify the claim that the basis in equation gives a Jordan block (i.e. is of the form in equation ).  "
},
{
  "id": "exercise-94",
  "level": "2",
  "url": "sec-lincode2.html#exercise-94",
  "type": "Exercise",
  "number": "5.3.6",
  "title": "",
  "body": " Find the motion of a spring-mass system with mass , spring constant and damping constant assuming and .  "
},
{
  "id": "sec-lincode3",
  "level": "1",
  "url": "sec-lincode3.html",
  "type": "Section",
  "number": "5.4",
  "title": "Linear Constant Coefficient ODE III",
  "body": " Linear Constant Coefficient ODE III   In this section we will complete the study of this type of ODE by removing the homogeneous condition. The form of such an equation in is where As always, if is diagonalizable, we can change to our eigenbasis and get an immediate solution. This will be the case we focus on.   Uniqueness of Solutions to ODEs   Suppose is diagonalizable and is a change of basis matrix so that and let If and then is a solution to equation .    Since we are asserting only that we have found a solution, we need only check that equation holds. First we observe that Using this, we then compute    As it turns out, once we obtain a particular solution to the non-homogeneous equation, we can use our previous homogeneous solutions to get the general solution.    If are linearly independent solutions to the homogeneous equation and is a particular solution to then the general solution is given by    It is an exercise to see that is a solution to the non-homogeneous equation. If is any solution, then from the uniqueness theorem, any solution with must equal . But since are linearly independent, so are which implies they form a basis of . Thus there are constants so that This then means that for the solution in equation and we are done.    Combining , and gives us the methods to obtain general solutions to any constant coefficient linear ODE. That said, these methods can contain obstacles that are difficult to overcome such as finding roots of polynomials or integrating difficult functions. Moreover, many linear ordinary differential equations of interest do not have constant coefficients and of course, there are non-linear ordinary differential equations that are also of great interest. In coming sections, we will build some new tools to address some of these cases. For now though, let us look at a couple of examples of the nonhomogeneous case.   A non-homogeneous two dimensional equation   In we considered the linear system Let us consider a non-homogeneous version of this system such as We can write this as the matrix equation In this case we have Looking back to the example, we see that we found the -eigenvector and -eigenvector which form an eigenbasis From these we had the change of basis matrices Using this, we apply to find We then can calculate the integrals using integration by parts Finally, we then obtain a particular solution Using the homogeneous solutions gives    We now consider a second order scalar ODE.   Resonance   One of the most fascinating applications of linear ODE's is the spring-mass explored in . Recall the homogeneous equation was Adding an inhomgeneous term to this equation gives To adopt this into the first order framework, we may rewrite the equation as We now focus our attention on the case of where there is some oscillation. By equation we have the eigenvalues which are roots of the characteristic polynomial. Here and we have the eigenbasis This gives the matrix which has inverse Now can be used with to obtain a particular solution which is Thus to obtain the solution, we must start by calculating Now, given any this problem could become quite a difficult (even impossible) integral problem. However, one practical case to consider is when is an exponential itself for some complex number . The reason this is practical is that such can be thought of as an external force acting on the spring-mass system and may involve some periodicity. So we will consider the case of and note we can obtain and functions by taking real and complex parts of this one. Writing this out, we obtain It is here that we notice a very special situation can occur, namely the case when . First let us assume this is not the case and compute Then the particular solution in equation is Adding a homogeneous term gives the general solution.  This case when or (usually when no damping is present and is purely imaginary) is called pure resonance . Let's assume so that equation gives us the solution To understand this solution, let's consider when there is no damping so that and take the real part of the homogeneous term and thus the real part of our solution to find a shocking solution Why is this so shocking? Well, observe that there is a in the amplitude of the function which means that this solution oscillates but is unbounded . This resonance occurs when the intrinsic frequency of the spring matches the forcing frequency and explains many tragic disasters (like suspension bridges being destroyed by the wind blowing in certain frequencies). Examining the prior solutions show that all other solutions (with bounded forcing term) are in fact bounded solutions and most experience exponential decay (which is certainly good for bridges and other things!).      Higher order linear ODE's  While we solved the spring-mass system as a first order system of differential equations, it is in fact easier to find these solutions if we consider the whole equation as a single differential operator equation. This generalizes to all higher order linear differential equations with constant coefficients and we take a moment to explain this more elementary approach.  First, we make a definition.     Smooth path    For an inner product space , a path is called smooth if tangent vectors exist to any order. The vector space of smooth paths is denoted .    As infinite dimensional vector spaces go, is not optimal and is often replaced with a Hilbert space. Nevertheless, for our purpose, it will do just fine. We will consider the case where . In this case, we have the linear transformation This is the most basic of differential operators, but perhaps it is a new experience to consider this as a linear transformation. If we do, then we note that the eigenvalues are in fact all complex numbers! Indeed, taking we have the eigenfunction which spans the -eigenspace of the derivative. How can this be used? Well, let's look at our homogeneous higher order differential equation again and see that if the characteristic equation has solutions then our equation becomes The expression is a linear transformation from to itself and thus solutions to the homogeneous equation are just elements of the kernel of this transformation. If each of the are distinct, then it is not hard to see that these are just the eigenfunctions of the derivative In the case when there is multiplicity, we have a factor of the differential operator of the form Finding vectors in the kernel of this operator is precisely the same as finding generalized -eigenvectors of . In fact, the space of generalized -eigenvectors is so this derivative operator not only has every number as an eigenvalue, every eigenvalue has an infinite dimensional generalized eigenspace! Of course, only the first generalized eigenvectors solve the equation Thus if the characteristic polynomial is then the general solution to the homogeneous differential equation (as a complex valued function) is Now, the non-homogeneous case with eigenfunction looks like If is not one of the , one sees that gives a solution. Using gives the general solution in this case.  When does occur as one of the (which is the case of resonance), we must use the appropriate generalized -eigenfunction. Suppose, for example, that then These general solutions then lead to what is called the method of undetermined coefficients . In truth, this is simply writing the general solution and solving the linear algebra problem presented by the initial conditions. Let us work through an example.   Method of undetermined coefficients   Consider the differential equation with initial conditions , and . We calculate and factor the characteristic polynomial to see So the homogeneous solutions can be written in the form Now, we take a look at the inhomogeneous term and use our impressive knowledge to suggestively rewrite it We observe that the functions and are and -eigenfunctions for the derivative. Applying equation and linearity gives the particular solution, Thus the general solution is To find our actual solution we simply apply initial conditions and see This is a linear system which can be written as Solving this system gives Putting this into our general solution and simplifying gives the real function        Find the solution to the non-homogeneous linear system with initial conditions .    Show that when is distinct from , in equation solves the non-homogeneous equation .    Show that when , in equation solves the non-homogeneous equation .    Solve the differential equation if .    "
},
{
  "id": "thm-particularsolutionnhode",
  "level": "2",
  "url": "sec-lincode3.html#thm-particularsolutionnhode",
  "type": "Theorem",
  "number": "5.4.1",
  "title": "Uniqueness of Solutions to ODEs.",
  "body": " Uniqueness of Solutions to ODEs   Suppose is diagonalizable and is a change of basis matrix so that and let If and then is a solution to equation .    Since we are asserting only that we have found a solution, we need only check that equation holds. First we observe that Using this, we then compute   "
},
{
  "id": "cor-generalnonhomosolution",
  "level": "2",
  "url": "sec-lincode3.html#cor-generalnonhomosolution",
  "type": "Corollary",
  "number": "5.4.2",
  "title": "",
  "body": "  If are linearly independent solutions to the homogeneous equation and is a particular solution to then the general solution is given by    It is an exercise to see that is a solution to the non-homogeneous equation. If is any solution, then from the uniqueness theorem, any solution with must equal . But since are linearly independent, so are which implies they form a basis of . Thus there are constants so that This then means that for the solution in equation and we are done.   "
},
{
  "id": "ex-lineardiagonalode4",
  "level": "2",
  "url": "sec-lincode3.html#ex-lineardiagonalode4",
  "type": "Example",
  "number": "5.4.3",
  "title": "A non-homogeneous two dimensional equation.",
  "body": " A non-homogeneous two dimensional equation   In we considered the linear system Let us consider a non-homogeneous version of this system such as We can write this as the matrix equation In this case we have Looking back to the example, we see that we found the -eigenvector and -eigenvector which form an eigenbasis From these we had the change of basis matrices Using this, we apply to find We then can calculate the integrals using integration by parts Finally, we then obtain a particular solution Using the homogeneous solutions gives   "
},
{
  "id": "ex-resonance",
  "level": "2",
  "url": "sec-lincode3.html#ex-resonance",
  "type": "Example",
  "number": "5.4.4",
  "title": "Resonance.",
  "body": " Resonance   One of the most fascinating applications of linear ODE's is the spring-mass explored in . Recall the homogeneous equation was Adding an inhomgeneous term to this equation gives To adopt this into the first order framework, we may rewrite the equation as We now focus our attention on the case of where there is some oscillation. By equation we have the eigenvalues which are roots of the characteristic polynomial. Here and we have the eigenbasis This gives the matrix which has inverse Now can be used with to obtain a particular solution which is Thus to obtain the solution, we must start by calculating Now, given any this problem could become quite a difficult (even impossible) integral problem. However, one practical case to consider is when is an exponential itself for some complex number . The reason this is practical is that such can be thought of as an external force acting on the spring-mass system and may involve some periodicity. So we will consider the case of and note we can obtain and functions by taking real and complex parts of this one. Writing this out, we obtain It is here that we notice a very special situation can occur, namely the case when . First let us assume this is not the case and compute Then the particular solution in equation is Adding a homogeneous term gives the general solution.  This case when or (usually when no damping is present and is purely imaginary) is called pure resonance . Let's assume so that equation gives us the solution To understand this solution, let's consider when there is no damping so that and take the real part of the homogeneous term and thus the real part of our solution to find a shocking solution Why is this so shocking? Well, observe that there is a in the amplitude of the function which means that this solution oscillates but is unbounded . This resonance occurs when the intrinsic frequency of the spring matches the forcing frequency and explains many tragic disasters (like suspension bridges being destroyed by the wind blowing in certain frequencies). Examining the prior solutions show that all other solutions (with bounded forcing term) are in fact bounded solutions and most experience exponential decay (which is certainly good for bridges and other things!).   "
},
{
  "id": "def-smoothpath",
  "level": "2",
  "url": "sec-lincode3.html#def-smoothpath",
  "type": "Definition",
  "number": "5.4.5",
  "title": "",
  "body": "   Smooth path    For an inner product space , a path is called smooth if tangent vectors exist to any order. The vector space of smooth paths is denoted .   "
},
{
  "id": "p-774",
  "level": "2",
  "url": "sec-lincode3.html#p-774",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "method of undetermined coefficients "
},
{
  "id": "ex-methodundcoef",
  "level": "2",
  "url": "sec-lincode3.html#ex-methodundcoef",
  "type": "Example",
  "number": "5.4.6",
  "title": "Method of undetermined coefficients.",
  "body": " Method of undetermined coefficients   Consider the differential equation with initial conditions , and . We calculate and factor the characteristic polynomial to see So the homogeneous solutions can be written in the form Now, we take a look at the inhomogeneous term and use our impressive knowledge to suggestively rewrite it We observe that the functions and are and -eigenfunctions for the derivative. Applying equation and linearity gives the particular solution, Thus the general solution is To find our actual solution we simply apply initial conditions and see This is a linear system which can be written as Solving this system gives Putting this into our general solution and simplifying gives the real function    "
},
{
  "id": "exercise-95",
  "level": "2",
  "url": "sec-lincode3.html#exercise-95",
  "type": "Exercise",
  "number": "5.4.2.1",
  "title": "",
  "body": " Find the solution to the non-homogeneous linear system with initial conditions .  "
},
{
  "id": "exercise-96",
  "level": "2",
  "url": "sec-lincode3.html#exercise-96",
  "type": "Exercise",
  "number": "5.4.2.2",
  "title": "",
  "body": " Show that when is distinct from , in equation solves the non-homogeneous equation .  "
},
{
  "id": "exercise-97",
  "level": "2",
  "url": "sec-lincode3.html#exercise-97",
  "type": "Exercise",
  "number": "5.4.2.3",
  "title": "",
  "body": " Show that when , in equation solves the non-homogeneous equation .  "
},
{
  "id": "exercise-98",
  "level": "2",
  "url": "sec-lincode3.html#exercise-98",
  "type": "Exercise",
  "number": "5.4.2.4",
  "title": "",
  "body": " Solve the differential equation if .  "
},
{
  "id": "sec-linode",
  "level": "1",
  "url": "sec-linode.html",
  "type": "Section",
  "number": "5.5",
  "title": "Linear Ordinary Differential Equations",
  "body": " Linear Ordinary Differential Equations   Having studied constant coefficient linear ODE's to a satisfactory degree, we now consider the more general case of linear ODE's. Again we will begin with the homogeneous case which appears to us as the equation Indeed, we could have written this as before, so long as we recognize a key difference - the matrix is time dependent . It may seem to a student that this is a minor change, but in fact the general equation may now prove nearly impossible to solve. Notwithstanding this potential danger, there are many subclasses of linear ODE's which do admit solutions and whose solutions are of great importance. In this section we give a survey of some standard techniques available to solve some special cases.    The Matrix Exponential  As it turns out, given any matrix with real (or even complex) entries, there is a convergent power series What we mean by this formula is that each entry in the sum forms a convergent series. This can be seen by taking the maximum of the absolute values of the entries and applying a ratio test to the entries. Now one might imagine that if we replaced with a path of matrices that we could apply the chain rule and get Sadly, one would be disappointed with reality here. Indeed, the main problem that occurs comes from the non-commutative nature of multiplication. To see this, you will show in an exercise that On the other hand, if commutes with its derivative then So under this condition, we would have Commuting matrices also work well with exponential rules as can be seen in the following lemma.    If and are commuting square matrices then   ,   .     This brings us to a nice, albeit slightly opaque, theorem.    Suppose and are commuting square matrices and then is a solution to equation \" for any vector . Furthermore, the unique solution with initial condition has .    The proof of this theorem is simply equation . In practice, this theorem yields mixed results, but does come up as a solution in certain circumstances.   Using exponential matrices   Any homogeneous constant coefficient matrix can be seen to fit into this case. In particular, if is diagonalizable with then If the columns of are the eigenbasis , the initial condition is and then this reproduces our solution     Using exponential matrices   Consider the linear system This can be written as the matrix equation Letting One can check that and commute and that , so by our theorem, is a solution.  While this is very nice, the expression of this solution is a bit opaque since the exponential may be well defined, but is not readily computable. However, one can observe that is diagonalizable as a matrix of functions in the sense that This can be used to see that which in turn will give explicit solutions to our original linear system.      Higher order linear ODE's II  Given a higher order linear ODE we may have limited resources to find a solution. For example, it is known that even when the coefficient functions are polynomials ( a so called holonomic differential equation), the solutions may have no expression in terms of exponentials, trigonometric, or polynomial functions. However, we do have qualitative results that can be asserted.    If and are differentiable functions in equation , then there is an -dimensional space of solutions. More generally, there is a solution to equation and any other solution is of the form where is a solution to the case.    Again, when we call equation a homogeneous linear ODE and the solutions form a vector space. The function is called a particular solution and a complementary solution. A basis of solutions to the homogeneous equation are called fundamental solutions .  The proof of this theorem follows immediately from recasting it as a first order matrix equation with an matrix and applying the existence and uniqueness theorems (which still are to be proven). However, given any technique to find solutions, one may wish to see whether the solutions form a basis. For this, we have the following tool.     Wronskian of scalar functions    Given scalar functions , their Wronskian is    The Wronskian is useful to show that one has obtained fundamental solutions.    Suppose solve equation with domain on a connected interval and with . If for any , then form fundamental solutions.    If then the matrix in is invertible. This means the columns are linearly independent. But then any initial condition is a linear combination of those given by implying is a linear combination of these functions (by the uniqueness of solutions with a given initial condition).     Using the Wronskian   Consider the differential equation One checks that and are solutions to this equation for . Calculating the Wronskian gives Since this is non-zero, we conclude that and are fundamental solutions.      ower Series Methods  Let us return to a second order linear ODE, which is the subject of a great amount of mathematics. We will work through a sufficiently general example to illustrate the method of using power series in differential equations, but we will refrain from a full exposition on this subject as it can involve a large amount of new and unrelated techniques (but take a numerical analysis course if you are interested in this!). We consider the Bessel equation which seems to be very close to , but in fact is much more challenging. The zero-th Bessel equation is The key difference between this and the equation given in the example is that the function in front of is no longer constant. The power series method (aka Frobenius method) is to assume that is a convergent power series expression for with non-zero radius of convergence. We solve for using the differential equation. Indeed, putting into the equation gives Now we reindex each summand on the right to get a single series. Now, on the right hand side we have a power series with non-zero radius of convergence around which is identically zero. This implies each coefficient must be zero (why?). In particular we obtain that and the recursion relations Combining the fact that with this relation gives so there are only even coefficients. Furthermore, we have giving the equation Taking we obtain the zeroth Bessel function This function is one of several functions that has several applications in wave propagation and heat transfer. It cannot be expressed with a finite composition using our elementary functions , , , and ... it's brand new!     Verify equation .    Verify .    Find fundamental solutions to the ordinary differential equation  Try a function like .   The solution for Bessel's Equation has exactly one constant in its expression. However, solutions to second order differential equations normally have two parameters corresponding to the two initial conditions. Explain why there is only one in this case.    Use power series methods to solve the differential equation with initial conditions , .    "
},
{
  "id": "lem-expmatcomm",
  "level": "2",
  "url": "sec-linode.html#lem-expmatcomm",
  "type": "Lemma",
  "number": "5.5.1",
  "title": "",
  "body": "  If and are commuting square matrices then   ,   .    "
},
{
  "id": "thm-expsolution",
  "level": "2",
  "url": "sec-linode.html#thm-expsolution",
  "type": "Theorem",
  "number": "5.5.2",
  "title": "",
  "body": "  Suppose and are commuting square matrices and then is a solution to equation \" for any vector . Furthermore, the unique solution with initial condition has .   "
},
{
  "id": "example-76",
  "level": "2",
  "url": "sec-linode.html#example-76",
  "type": "Example",
  "number": "5.5.3",
  "title": "Using exponential matrices.",
  "body": " Using exponential matrices   Any homogeneous constant coefficient matrix can be seen to fit into this case. In particular, if is diagonalizable with then If the columns of are the eigenbasis , the initial condition is and then this reproduces our solution   "
},
{
  "id": "example-77",
  "level": "2",
  "url": "sec-linode.html#example-77",
  "type": "Example",
  "number": "5.5.4",
  "title": "Using exponential matrices.",
  "body": " Using exponential matrices   Consider the linear system This can be written as the matrix equation Letting One can check that and commute and that , so by our theorem, is a solution.  While this is very nice, the expression of this solution is a bit opaque since the exponential may be well defined, but is not readily computable. However, one can observe that is diagonalizable as a matrix of functions in the sense that This can be used to see that which in turn will give explicit solutions to our original linear system.   "
},
{
  "id": "theorem-18",
  "level": "2",
  "url": "sec-linode.html#theorem-18",
  "type": "Theorem",
  "number": "5.5.5",
  "title": "",
  "body": "  If and are differentiable functions in equation , then there is an -dimensional space of solutions. More generally, there is a solution to equation and any other solution is of the form where is a solution to the case.   "
},
{
  "id": "p-791",
  "level": "2",
  "url": "sec-linode.html#p-791",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "particular complementary fundamental solutions "
},
{
  "id": "def-Wronskian",
  "level": "2",
  "url": "sec-linode.html#def-Wronskian",
  "type": "Definition",
  "number": "5.5.6",
  "title": "",
  "body": "   Wronskian of scalar functions    Given scalar functions , their Wronskian is   "
},
{
  "id": "lemma-18",
  "level": "2",
  "url": "sec-linode.html#lemma-18",
  "type": "Lemma",
  "number": "5.5.7",
  "title": "",
  "body": "  Suppose solve equation with domain on a connected interval and with . If for any , then form fundamental solutions.    If then the matrix in is invertible. This means the columns are linearly independent. But then any initial condition is a linear combination of those given by implying is a linear combination of these functions (by the uniqueness of solutions with a given initial condition).   "
},
{
  "id": "ex-wronskian",
  "level": "2",
  "url": "sec-linode.html#ex-wronskian",
  "type": "Example",
  "number": "5.5.8",
  "title": "Using the Wronskian.",
  "body": " Using the Wronskian   Consider the differential equation One checks that and are solutions to this equation for . Calculating the Wronskian gives Since this is non-zero, we conclude that and are fundamental solutions.   "
},
{
  "id": "exercise-99",
  "level": "2",
  "url": "sec-linode.html#exercise-99",
  "type": "Exercise",
  "number": "5.5.4.1",
  "title": "",
  "body": " Verify equation .  "
},
{
  "id": "exercise-100",
  "level": "2",
  "url": "sec-linode.html#exercise-100",
  "type": "Exercise",
  "number": "5.5.4.2",
  "title": "",
  "body": " Verify .  "
},
{
  "id": "exercise-101",
  "level": "2",
  "url": "sec-linode.html#exercise-101",
  "type": "Exercise",
  "number": "5.5.4.3",
  "title": "",
  "body": " Find fundamental solutions to the ordinary differential equation  Try a function like . "
},
{
  "id": "exercise-102",
  "level": "2",
  "url": "sec-linode.html#exercise-102",
  "type": "Exercise",
  "number": "5.5.4.4",
  "title": "",
  "body": " The solution for Bessel's Equation has exactly one constant in its expression. However, solutions to second order differential equations normally have two parameters corresponding to the two initial conditions. Explain why there is only one in this case.  "
},
{
  "id": "exercise-103",
  "level": "2",
  "url": "sec-linode.html#exercise-103",
  "type": "Exercise",
  "number": "5.5.4.5",
  "title": "",
  "body": " Use power series methods to solve the differential equation with initial conditions , .  "
},
{
  "id": "colophon-2",
  "level": "1",
  "url": "colophon-2.html",
  "type": "Colophon",
  "number": "",
  "title": "Colophon",
  "body": " This book was authored in PreTeXt .  "
}
]

var ptx_lunr_idx = lunr(function () {
  this.ref('id')
  this.field('title')
  this.field('body')

  ptx_lunr_docs.forEach(function (doc) {
    this.add(doc)
  }, this)
})

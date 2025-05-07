April 25, 2025

# SECTION 10: Thinking in React: Components, Composition, & Reusability

1. Section Overview

2. Project Setup a UsePopcorn App - a movie app api & Connect to Github Repo

3. How to Split a UI Into Components

   ![alt text](/src/screenshot/image.png)
   ![alt text](/src/screenshot/image-1.png)
   ![alt text](/src/screenshot/image-2.png)

4. Splitting Components in Practice

April 26, 2025

5. Component Categories
   ![alt text](/src/screenshot/image-3.png)

6. Prop Drilling - a several nested child components to get the data
   ex. const [movies, setMovies] = useState(tempMovieData);
   Main App -> Main -> List Box -> Movie List

7. Component Composition
   ![alt text](/src/screenshot/image-4.png)
   ![alt text](/src/screenshot/image-5.png)

8. Fixing Prop Drilling With Composition (And Building a Layout)
   Using children {children} prop is the key

April 27, 2025

9. Using Composition to Make a Reusable Box
10. Passing Elements as Props (Alternative to children) - used in react router
11. Building a Reusable Star Rating Component

May 7, 2025

12. Creating the Stars
13. Handling Hover Events
14. Props as a Component API
    ![alt text](/src/screenshot/image-6.png)
15. Improving Reusability With Props
16. Prototype

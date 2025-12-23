#Multilingual Job Listings App

This is a React-based job listings application that supports multiple languages using i18next.
The project is built to understand how internationalization works in real-world React apps and how to manage UI translations cleanly.

The app displays job openings and allows content to change based on the selected language.

Tech Stack
React
i18next & react-i18next
i18next-browser-languagedetector
Tailwind CSS v4
Vercel (Deployment)

#Features
--> Multilingual support (English, Hindi, French, Arabic)
--> Job listings rendered from translation files
--> Language detection using browser/localStorage
--> Clean UI using Tailwind CSS
--> Single Page Application routing


#Project Setup (Internationalization)
--> Separate translation files for each language
--> common.json for shared UI text
--> jobs.json for job-related content 
--> Namespace-based translations using i18next
--> Language detection via browser and localStorage  (by using -> i18next-browser-languagedetector )

#Deployment
--> The project is deployed on Vercel.
--> Special configuration was added to handle client-side routing so that refreshing any route does not result in a 404 error.

#Challenges Faced
This project helped me understand real development issues. Some key challenges were:

--> i18next data returning undefined
Faced issues while accessing arrays from translation files due to incorrect usage of t() and namespaces.

--> Tailwind CSS v4 spacing issues
Padding utilities like p-14 did not work because Tailwind v4 has a strict spacing scale and global CSS resets were overriding utilities.

--> 404 error on page refresh (Vercel)
When refreshing routes other than the home page, Vercel showed a 404 error.
This was fixed by adding a rewrite rule to always serve index.html for SPA routing.

These challenges helped me understand how libraries behave in real projects instead of just theory.
 

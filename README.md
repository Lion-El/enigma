# Enigma
### Art Therapy - Community Support Group Website
This website is for local communities nationwide. The purpose of this website is to advertise and provide information about our community support group program. The program is funded and provided completely free. The purpose of the program is to create a community spirit and promote a healthier lifestyle through art. We are particularly interested in people who feel isolated maybe through a lack of funds or resources, confidence, or self-esteem or those who suffer from stress and anxiety. We want to bring local communities together around events based on a wide variety of artistic fields. There can be a divide along the lines of national, cultural and ethnic. This program hopes to bridge any divide that might exist through communication and freedom of expression through art, and each member can reap the health benefits through participation. There is a large study on the mental, physical and social health benefits of art. It is precisely this study that we want to utilize to bring different people together socially, creating a feeling of togetherness while nurturing the subtle seed of health.

The website is made up of twelve pages. There are three main parts to the website each part is made up of three pages. The first part covers the background, purpose and significance. The second covers the events and the third is a gallery of all the artworks produced by current members and participants. There is a landing page with a brief description and navigation links to the main content, a form page and a newsletter.

## Responsive Design

![responsive design](https://i.imgur.com/cYjnboK.png)

## Features

### Navigation

* Main Navigation
    * The main navigation for mobile opens via a click event: transition from sandwich icon to cross icon as the nav element slides out into view simultaneously.
    * In the tablet and desktop versions, the sandwich icon is removed and replaced by the main three categories which each open a sub-category via a click event.
    Three main categories open a sub-navigation, each with three options.

#### Mobile and Tablet/Desktop navigation

![main nav - mobile](https://i.imgur.com/ImasRe6m.png)
![main nav - tablet](https://i.imgur.com/AYcF2oxm.png)
![main nav - mobile](https://i.imgur.com/sTuZSCUm.png)
![main nav - mobile](https://i.imgur.com/cTj7hg8m.png)
![main nav - mobile](https://i.imgur.com/29IQpL3m.png)

### Hero

The hero section indicates what the site is about. It gives users an image that symbolizes the basis of the website along with a title and slogan.

![main nav - mobile](https://i.imgur.com/YdP7yTVl.png)

### Sub Hero - Mission section

The sub-hero section outlines the purpose of the website with a brief description, images and a button/link for further reading. The pages for further reading are for health and community.  

#### Sub Hero - Mission

![mission section](https://i.imgur.com/Rqf2FiNl.png)

#### Health

![health page](https://i.imgur.com/xMUzeall.png)

#### Community

![Community page](https://i.imgur.com/LR945rAl.png)

### Events Section

The Events section presents three categories of events with multiple activities and a call to action button. The call to action opens up the page relating to the category under which the call to action was chosen.  

#### Events  

![events section](https://i.imgur.com/GXPAN5Jl.png)  

The events pages have a detailed description of the events and a call to action button for booking an activity.

#### Visual arts  

![Visual art events page](https://i.imgur.com/tQmr2TFl.png)

#### Literary arts  

![Literary art event page](https://i.imgur.com/waNIIBsl.png)

#### Performing arts  

![Performing art events page](https://i.imgur.com/hG5Pe44l.png)

### Events Form

The events form is for registering for an event.  

![Events form](https://i.imgur.com/OXeuIrvl.png)

### Gallery

The gallery section on the landing page shows a few images of art produced by previous participants. The Gallery pages for each category are navigated via the main navigation or the footer navigation.

![Gallery images](https://i.imgur.com/ho5T8Wel.png)  

#### Carnival  

![carnival gallery images](https://i.imgur.com/jiskOAyl.png)  

#### Ceramics  

![ceramics gallery images](https://i.imgur.com/kFigAqzl.png)  

#### Contemporary 

![contemporary gallery images](https://i.imgur.com/cXpwfnGl.png)

### Footer

The footer section comprises two parts; a newsletter section with a call to action button/link to an external newspaper company and a footer navigation. The navigation is an index with links to the whole website. There is contact information and a bottom bar with copyright and social media links.  

![footer](https://i.imgur.com/PHHMHIil.png)

### Newsletter

The newsletter is front page news on an external website which is a local council newspaper. 

![newsletter](https://i.imgur.com/P9GDCDel.png)

## Testing

* The website has been tested in Google Chrome and Safari.
* I have tested the site for its responsiveness on all standard screen sizes up to a width of 1920px.
* I have checked every link on the site goes to its correct destination.
* Every section on the site is readable and easy to understand.
* I have checked the form works and every input field requires an entry.

## Bugs and fixes  

Using Absolute and relative positioning to overlap images caused adjacent content to move into the same position as the content being positioned and leave large white space respectively:

#### Sub-hero section - fix
* Set parent element/container to flex and relative. set child elements to float and translate them into position. Using float and translate allows the content to be controlled by the parent element and keeps it within the flow as opposed to using absolute.

#### gallery section - fix
* Set parent element/container to flex and relative. setting the parent to flex keeps the parent within the flow and stops adjacent content from moving and overlapping the content being moved. set child elements to absolute and position 50% to place them at the center of the parent element, then translate them into position. Using absolute and translation in this way keeps the images in the same position relative to the center. This method was replicated for the events and gallery pages.

#### images paths
Images are rendered to the website through the local host but they do not show when deployed through the remote server.

#### image paths - fix  
* add to full stops before the first file or folder identifier.

## Technology  
Adobe XD  
Zeppelin  
HTML/CSS

## Deployment Process

Push documents to the remote repository (Github). Utilize GitHub pages for hosting websites. Through build and deployment select a source ie branch - main, then select a folder and save. Go back to the repository, refresh the page, and select deployments under GitHub pages. select the URL for the website to open.

## Validation Testing

* The HTML and CSS code has been validated.
* Accessibility
    * The fonts and colors are accessible as shown in lighthouse dev-tools.


 ![lighthouse](https://i.imgur.com/8AwsiYSl.png)

 ## Credit 

Positioning images central relative to the parent.

George Lomidze  
CSS Bootcamp: Master CSS - 
[Packt](https://subscription.packtpub.com/video/web-development/9781800202801/p5/video5_1/-grand-hotel-project-preview)

```
.gallery-container {
        display: flex;
        position: relative;
        height: 17.85em;
    }

    /* relative positioning from center */
    .gallery-container div {
        position: absolute;
        left: 50%;
        top: 50%;
    }

    .gallery-container div:nth-child(1) {
        width: 16.03em;
        height: 10.767em;
        background-size: cover;
        border: #fffefd solid 4px;
        transform: translate(-12.744em, -8.75em)
    }

    .gallery-container div:nth-child(2) {
        width: 11.6em;
        height: 8.33em;
        background-size: cover;
        border: #fffefd solid 4px;
        transform: translate(-10.184em, 0.417em);
    }

    .gallery-container div:nth-child(3) {
        width: 9.316em;
        height: 7.1em;
        background-size: cover;
        border: #fffefd solid 4px;
        transform: translate(1.827em, -7.083em);
    }

    .gallery-container div:nth-child(4) {
        width: 13.56em;
        height: 8.983em;
        background-size: cover;
        border: #fffefd solid 4px;
        transform: translate(-1.0em, -1.875em);
    }
    /* relative positioning from center end */
```

## Media  

Images and fonts were taken from Adobe Stock and Adobe Fonts respectively.

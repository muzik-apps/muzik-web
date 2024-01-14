import { logo, logo_offline } from "../assets";

export const MuzikCards: {
    empty: boolean;
    logo: any;
    description: string;
    button_colour_var: string;
    download_link: string | null;
}[] =  [
    {
        empty: false,
        logo: logo,
        description: "Streaming music, interacting with friends, customisable gui on your computer.",
        button_colour_var: "muzik-color",
        download_link: null
    },
    {
        empty: false,
        logo: logo_offline,
        description: "Play music that is stored locally on your computer with a customisable gui",
        button_colour_var: "muzik-offline-color",
        download_link: "https://github.com/muzik-apps/muzik-offline/releases"
    },
    {
        empty: false,
        logo: logo,
        description: "For the enthuisiants, play music that is stored locally on your computer in a tui",
        button_colour_var: "muzik-tui-color",
        download_link: null
    },
    {
        empty: true,
        logo: null,
        description: "",
        button_colour_var: "",
        download_link: null
    }
]

export const faqCards:  {
question: string;
answer: string;
}[] = [
    {
        question: "What is Muzik?",
        answer: "Muzik-apps are a collection of apps that offer music streaming capabilities or the ability to play music that is stored locally on" + 
        " your computer all with an emphasis on customization, an easy to use gui and above all, a beautiful user experience."
    },
    {
        question: "How do I use Muzik?",
        answer: "Muzik is a collection of apps that are built for your computer(that means no support for mobile). " +
        "You can download the app that you want to use from the download section. and then " + 
        "follow the instructions when you have downloaded to install the app. After that, if you are using muzik-offline or muzik-tui you will want" +
        " to let Muzik know where your music is stored. You can do this by going to the settings page and choosing a directory."
    },
    {
        question: "My browser is flagging the exe as malware?",
        answer: "This is expected as the exe is not signed. You can safely ignore this warning and continue with the installation."
        + " If you are still worried, you can download the source code and build the app yourself. The source code is available on the github page."
    },
    {
        question: "My operating system is warning me about installing the software?",
        answer: "This is expected as the exe is not signed. You can safely ignore this warning and continue with the installation."
        + " If you are still worried, you can download the source code and build the app yourself. The source code is available on the github page."
    },
    {
        question: "I have encountered a bug or runtime error, what do I do?",
        answer: "Please head over to the github page and create an issue. Please include as much information as possible including the error message, " +
        "the steps to reproduce the error and the version of the app you are using. A template already exists so it should be easy to follow."
    },
    {
        question: "I like the app and I would like to show some support?",
        answer: "You can head over to the github page and star the repo. This will help the app get more visibility and will help more people find muzik apps."
    },
]
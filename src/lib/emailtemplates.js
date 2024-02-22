let templates = {
  funeralarrangement: {
    withcheckbox: true,
    subject: "Preliminary Email: Funeral Arrangement - ",
    body: `God bless,<br><br>`,
    greeting: `We offer our deepest condolences to you and your family. Please know that we are available to assist you with this process. <br><br>`,
    authorization: `Once you are ready to move forward with us, we will send you electronic documents to fill out and complete. At that time you will need to send us a copy of your photo ID. <br><br>`,
    funeralpreference: `Based on the conversation where you shared your preferences and wishes, we have attached a contract to this email that reflects a {{insertservice}}<br><br>`,
    pricing: `{{insertservice}}: {{inserttotal}} <br><br>`,
    bookingdisclaimer: `Due to the number of families we serve, we need to know what preferred date you would like to host the funeral. The availability of the chapel for the service changes daily. We must know your preferred date to ensure booking.<br><br> `,
    casketlink: `Here is a link for casket choices:<br>
<a href="https://heyzine.com/flip-book/566e83ab94.html#page/24">https://heyzine.com/flip-book/566e83ab94.html#page/24</a><br><br>

After you select a casket, we will then adjust the contract.<br><br>
   Add-ons: <br><br>

For the add-ons, please refer to the list below for your reference: <br>
●	Slideshow: $40.00<br>
●	Programs: $2.25 per sheet<br><br>
●	Live stream: (IF SERVICE IS AT THE FUNERAL HOME)<br>
    ○	Free - if the family conducts it<br>
    ○	Single Camera (via youtube) - $250.00<br>
    ○	4-camera production - $650.00<br><br>
●	Live stream: (IF SERVICE IS AT A CHURCH)<br>
    ○	The family conducts it if possible: FREE<br>
    ○	The church conduct if they have the means: Pricing depends on the church<br>
    ○	An outside video production team is hired: Ranging from $600-$750<br>
<br>`,
    urnflipbook: `
    Attached below is the flip book of Urn options. <br><br>

You may make a small list of urn options that you like and we will go through their pricing of them with you.<br>
<a href="https://heyzine.com/flip-book/ba78d2185e.html#page/14">https://heyzine.com/flip-book/ba78d2185e.html#page/14</a><br><br>

Add-ons<br><br>

Programs: <br>
$1.75 per sheet<br><br>

Livestream at funeral home:<br><br> 

Dove Release(if allowed by the company):<br>
$500.00 <br><br>

Horse and Carriage(if applicable):<br>
$3,200.00 <br><br>

For the add-ons, the programs will be $1.75 per sheet<br><br>
`,
    outro: `We will be on standby and ready to move forward once the proper authorizations are given. Thank you!<br><br>`,
    clientpage: `Below is the link to access the agreement forms needed to be fill up.<br>
`,
  },
  prearrangement: {
    withcheckbox: true,
    subject: "Preliminary Email: Pre-Arrangement - ",
    body: `God bless,<br></br>`,
    greeting: `Thank you for reaching out to us and for your patience regarding these matters. We hope this email finds you well.<br></br>`,
    funeralpreference: `Based on the conversation where you shared your preferences and wishes. I have attached a contract to this email that reflects a {{insertservice}}<br></br>`,
    pricing: `{{insertservice}}: {{inserttotal}} <br><br>`,
    casketlink: `Here is a link for casket choices:<br><br>
<a href="https://heyzine.com/flip-book/566e83ab94.html#page/24">https://heyzine.com/flip-book/566e83ab94.html#page/24</a>
<br><br> 
After you select a casket, we will then finalize the contract. When you are ready to meet, please call us so we can set an appointment.
<br><br>
Add-ons:<br><br>
Slideshow: $40.00<br>
Programs: $2.25 per sheet<br><br>
Live stream:<br>
Free - if the family conducts it<br>
Single Camera (via youtube) - $250.00 <br>
4-camera production - $650.00<br>
<br><br>`,
    authorization: `Once you are ready to move forward with us, please send us a copy of your photo ID, then we will send you an electronic document for you to fill out and complete.
<br><br>
Or There are a few documents that need to be signed in person. When you are ready to meet, please contact us so we can schedule an appointment
<br><br>`,

    urnflipbook: `
    Attached below is the flip book of Urn options. <br><br>

You may make a small list of urn options that you like and we will go through their pricing of them with you.<br>
<a href="https://heyzine.com/flip-book/ba78d2185e.html#page/14">https://heyzine.com/flip-book/ba78d2185e.html#page/14</a><br><br>




Add-ons<br><br>

Programs: <br>
$1.75 per sheet<br><br>

Livestream at funeral home:<br><br> 

Dove Release(if allowed by the company):<br>
$500.00 <br><br>

Horse and Carriage(if applicable):<br>
$3,200.00 <br><br>

For the add-ons, the programs will be $1.75 per sheet <br><br>
`,
    outro: `We will be on standby and ready to move forward once the proper authorizations are given. Thank you!<br><br>`,
    clientpage: `Below is the link to access the agreement forms needed to be fill up. <br>
`,
  },
  obituaryandyoutube: {
    subject: "Obituary Profile and Youtube live stream link - ",
    body: `Good afternoon,<br><br>
Please see below the link to the Obituary profile and Youtube Livestream for the funeral service on {{service_date}}, at {{service_time}} for {{decname}}.<br><br>

Obituary Profile:<br>
{insert link}<br><br>

Youtube live stream link:<br>
{insert link}<br><br>

Feel free to copy and paste the above message and send it to your family and friends.<br><br>

Thanks for trusting us to serve you.
`,
  },
  visarequest: {
    subject: "Visa Request Link: ",
    body: `Good day,<br><br>

I hope all is well with you. Here is the information for the Haiti Visa request.<br><br>

You need to apply online for an expedited visa request for each person you want to request. There will be a payment of approximately $160.00 paid through the site. The funeral home cannot apply for the family. It must be someone from the family or a family friend who can apply for you.<br><br>

Here is the link to apply for the expedited visas. Please scroll down and follow the 5 step process.
https://www.ustraveldocs.com/ht/ht-niv-expeditedappointment.asp<br><br>

Please send the Full Name of the applicant and the relationship with the decedent so we can create a Visa Request Form for you.<br><br>


NOTE (NOT INCLUDED IN EMAIL): For you reference, please see the following links:<br>
●	Visa Request (Haiti): Protocol<br>
●	Visa Request (France): Protocol<br>
●	Visa Request Email (Jamaica): Protocol<br>
`,
  },
  familyvisa: {
    subject: "Family Visa Request - ",
    body: `Good Afternoon,<br><br>
 
Attached below are the documents for the visa request for the family of {{decname}}.<br>
●	{{contactname}} - relationship to the decedent
`,
  },
  zellepayment: {
    subject: "Zelle Payment Information - ",
    body: `Good day,<br><br>

Thank you for reaching out to us today.<br><br>

When sending a Zelle payment, we ask that you include the name of your loved one in the memo/description of what the payment is for to help us understand your intention for payment.<br><br> 

All Zelle payments should be linked to the email written below and nothing else (there is no phone number attached to our Business Zelle Account).<br><br> 

Zelle:<br>
Fdjfuneralservices@gmail.com<br><br>

Note: Please be aware that Zelle limits the amount that can be transferred per day.<br><br>

Please call us to confirm the receipt of your payment.<br><br>
`,
  },
  urnflipbook: {
    subject: "Urn Selection: Flipbook link - ",
    body: `Good afternoon,<br><br>`,
  },
};

export default templates;

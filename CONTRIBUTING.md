
# Contributing to Hacktoberfest'24 Official Website Repository

Thank you for your interest in contributing to the Hacktoberfest'24 Official Website repository! We are thrilled to have you as part of this collaborative effort led by **Google Developer Groups on Campus Graphic Era University** and our partner **Vaunt.dev**.

This repository offers a unique **2-Tier Contribution System**, which provides flexibility to contribute to our core repository or any open-source project of your choice.

---

## 1. Contribution Tiers

### Tier 1: Contribute to the Core Repository
For this tier, contributors work directly on the core repository of the Hacktoberfest event. Here's how to get started:

- **Find an Issue**: Go to the [Issues tab](../../issues) and search for issues with `[ISSUE]` in the title.
  - Maintainers will regularly update and label issues with `[ISSUE]`. You can also create a new issue with `[ISSUE]` in the title if you find a bug or a feature request.
  
- **Work on the Issue**: Once you've found an issue you'd like to work on, please comment on it to inform the maintainers that you're taking it up.

- **Submit a Pull Request**: After you've implemented the fix or feature, submit a pull request using the following naming convention:
  ```
  pr-add-<name>-<PR number>
  ```
  Example: `pr-add-johndoe-123`

### Tier 2: Contribute to External Repositories
In this tier, participants contribute to **ANY external repository** they are interested in. Follow these steps:

1. **Find an External Repository**: Choose any repository of your choice to contribute to.

2. **Get a Pull Request Merged**: Work on an issue or feature in the external repository and get your pull request merged successfully.

3. **Create an Issue in Our Repository**: 
    - Go to the [Issues tab](../../issues) in this repository.
    - Create an issue titled `[PR EXTERNAL] <your name>`.
    - In the issue, provide the following information:
        - Your Name
        - GitHub Username
        - PR Number
        - Link to the PR
        - A brief description of your contribution.

4. **Get Approval**: Our maintainers will verify your external contribution. Once it's approved, they will instruct you to:
    - Create a pull request against your own issue.
    - Update the `participants` file (explained below).

---

## 2. Updating the Participants Log

After your contribution is verified, you’ll need to update the `participants/index.js` file with your details to be featured in the leaderboard. The format is as follows:
```js
{
import participant_name from "./file_name(inside participant folder with participant details)";
`after that add name to array `
export const participants =[
  participant_name,
];

}```

### Example:
```js
{
  import JohnDoe from "./JohnDoe";
   export const participants = [
                JohnDoe,
   ];
},
```
create a new participant_name.js file inside participants folder with following . 
The format is as follows:
```js
import participant_nameImg from "./avatars/img/participant_name.jpg";

const participant_name = {
  id: "0",// add your serial number in contribution list
  name: "participant_name",
  university: "Your university name",
  img: participant_nameImg,
  pr: [0],// as per your PR
  prLink: ['https://github.com/iamAyushChamoli/hacktoberfest-24/pull/29']//your PR link
};

export default participant_name;
```
### Example:
```js
import JohnDoeImg from "./avatars/img/rishaub.jpg";

const JohnDoe = {
  id: "9",
  name: "John Doe",
  university: "Graphic Era University",
  img: JohnDoeImg,
  pr: [94],
  prLink: ['https://github.com/iamAyushChamoli/hacktoberfest-24/pull/94/commits/ee4f132a90e24f29a369ae83751af27bd86efd3a']
};

export default JohnDoe;
```
### **Updating Your Entry for Multiple Contributions**
If you’ve already made a contribution and your details are present in the `participants/index.js` file and you have created participant_name.js file inside participants folder, you **don’t need to create a new entry**. Instead, just update the `pr` and `prLink` arrays with your new PR details. Here's how:

- **Original Entry**:
    ```js
   import participant_nameImg from "./avatars/img/participant_name.jpg";

     const participant_name = {
        id: "2",
        name: "John Doe",
        university: "Graphic Era University",
        img: johnDoe,
        pr: [1, 2],
        prLink: ['#link1', '#link2'],
    },
    export default participant_name;
    ```

- **After Adding a New PR** (PR number: 3, PR link: `#link3`):
    ```js
   import participant_nameImg from "./avatars/img/participant_name.jpg";

     const participant_name = {
        id: "2",
        name: "John Doe",
        university: "Graphic Era University",
        img: johnDoe,
        pr: [1, 2, 3],
        prLink: ['#link1', '#link2', '#link3'],
    },
    export default participant_name;
    ```

This ensures your contributions are consolidated in a single entry, and your leaderboard details remain up-to-date.

---

### **How to Add Your Image**

To include your image in the `participants/participant_name.js` file, follow these steps:

1. **Prepare Your Image**: 
   - Ensure your image is square (1:1 aspect ratio) and in **JPG** or **PNG** format.
   
2. **Place Your Image in the Folder**: 
   - Save your image in the `participants/avatars/img/` folder.
   
3. **Import the Image**: 
   - After placing your image in the `img/` folder, go to the `participant_name.js` file in the `participants` folder.
   - Import your image using the following format:
     ```js
     import <yourImageNameImg> from './avatars/img/<yourImageName>.jpg (or .png)';
     ```

   Example:
   ```js
   import johnDoeImg from "./avatars/img/JohnDoe.jpg";
   ```

Once done, your image will be displayed on the leaderboard along with your contribution details.
---

## 3. Badges & Recognition

Our partner **Vaunt.dev** is offering limited edition **GitHub Badges** to recognize contributors. Here’s how you can earn them:

- **Participation Badge**: Complete at least 1 successful contribution (in Tier 1 or Tier 2).
- **Active Contributor Badge**: Complete 5 successful contributions.
- **Master Contributor Badge**: Complete 10 or more successful contributions.

Once verified, badges will be granted to your email or linked account. More details on badge distribution will follow during the event.

---

## 4. Code of Conduct

We are committed to maintaining a positive and inclusive environment for all contributors. Please take a moment to review our [Code of Conduct](./CODE_OF_CONDUCT.md).

---

## 5. Getting Help

If you have any questions or need help, feel free to ask in the [Discord Group](https://discord.gg/BngqfTwE) or contact our maintainers through the issues.

---

## 6. Additional Notes

- Please ensure your contributions adhere to the [Coding Guidelines](./CODE_OF_CONDUCT.md).
- Make sure to follow our PR format and ensure you are updating the correct files.
  
We appreciate your contributions and look forward to building something amazing together!

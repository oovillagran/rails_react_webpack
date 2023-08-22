# Set up a "Hello world" project as one app with Webpack

<a name="readme-top"></a>

<!-- TABLE OF CONTENTS -->

# 📗 Table of Contents

- [Hello World](#-Set-up-a-"Hello-world"-project-as-one-app-with-Webpack)
- [📗 Table of Contents](#-table-of-contents)
- [📖 et up a "Hello world" project as one app with Webpack app](#-Set-up-a-"Hello-world"-project-as-one-app-with-Webpack-app-)
  - [🛠 Built With ](#-built-with-)
    - [Tech Stack ](#tech-stack-)
    - [Key Features ](#key-features-)
  - [💻 Getting Started ](#-getting-started-)
    - [Prerequisites](#prerequisites)
    - [Setup](#setup)
    - [Usage](#usage)
    - [Run tests](#run-tests)
  - [👥 Authors ](#-authors-)
  - [🔭 Future Features ](#-future-features-)
  - [🤝 Contributing ](#-contributing-)
  - [⭐️ Show your support ](#️-show-your-support-)
  - [🙏 Acknowledgments ](#-acknowledgments-)
  - [📝 License ](#-license-)

<!-- PROJECT DESCRIPTION -->

# 📖 Set up a "Hello world" project as one app with Webpack app <a name="about-project"></a>

**Set up a "Hello world" project as one app with Webpack** is an application that implement a connection between a Ruby on Rails back-end and React front-end.

## 🛠 Built With <a name="built-with"></a>

### Tech Stack <a name="tech-stack"></a>

- Ruby
- PostgreSQL
- JavaScript

</details>

<!-- Features -->

### Key Features <a name="key-features"></a>

- Implement a connection between a Ruby on Rails back-end and React front-end.
- Understand the pros and cons of different approaches of connecting Ruby on Rails back-end with React front-end.
- Use of [Gitflow](https://github.com/microverseinc/curriculum-transversal-skills/blob/main/git-github/articles/gitflow.md).
- Use of [linters](https://github.com/microverseinc/linters-config).

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- GETTING STARTED -->

## 💻 Getting Started <a name="getting-started"></a>

Follow these steps in order to run ruby code.

### Prerequisites

First, you need to ensure that you have Rails and Ruby installed on your computer.

### Setup

It varies depending on your operating system so here are some links to help you install it on [Windows](https://gorails.com/setup/windows/10) and on [Ubuntu](https://www.ruby-lang.org/en/documentation/installation/#apt).

For MacOS run the following commands

```sh
  brew install rbenv ruby-build
  # Add rbenv to bash so that it loads every time you open a terminal
  echo 'if which rbenv > /dev/null; then eval "$(rbenv init -)"; fi' >> ~/.bash_profile
  source ~/.bash_profile

  # Install Ruby
  rbenv install 3.0.1
  rbenv global 3.0.1
  ruby -v
```

This example shows how to install Ruby 3.0.1 which was the latest version in April 2021, but you can check to see if there is a newer version [here](https://www.ruby-lang.org/en/downloads/releases/). Iy is also assumed that you have [homebrew](https://brew.sh/) already installed on your Mac.

### Usage

Once you have ruby installed, [clone this repository](https://docs.github.com/en/repositories/creating-and-managing-repositories/cloning-a-repository)

To run the project, execute the following command in the terminal:
```
bundle install
```
```
rails db:create
```
```
rails server
```
In your preferred browser, navigate to:
```
http://localhost:3000
```

### Run tests
To run tests, run the following command in the terminal:
```
rspec
```

<!-- AUTHORS -->

## 👥 Authors <a name="authors"></a>

👤 **Oscar Villagran**

- GitHub: [@oovillagran](https://github.com/oovillagran)
- Twitter: [@oovillagran](https://twitter.com/oovillagran)
- LinkedIn: [Oscar Villagran](https://www.linkedin.com/in/oovillagran/)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- FUTURE FEATURES -->

## 🔭 Future Features <a name="future-features"></a>

> The following are the future features that will be added to the project.

- [ ] **Add Styles.**

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- CONTRIBUTING -->

## 🤝 Contributing <a name="contributing"></a>

Contributions, issues, and feature requests are welcome!

Feel free to check the [issues page](../../issues/).

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- SUPPORT -->

## ⭐️ Show your support <a name="support"></a>

If you like this project you can give us a hand by recommending either one of us to potential employers! 😉🤝

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- ACKNOWLEDGEMENTS -->

## 🙏 Acknowledgments <a name="acknowledgements"></a>

I would like to thank those who have motivated me to keep on fighting despite how tough the journey may become.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- LICENSE -->

## 📝 License <a name="license"></a>

This project is [MIT](./LICENSE) licensed.

<p align="right">(<a href="#readme-top">back to top</a>)</p>
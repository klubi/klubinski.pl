import {Injectable} from '@angular/core';

@Injectable()
export class MyDataService {

  public getMyAccount(): MyAccount {
    return new MyAccount();
  }
}

export class MyAccount {
  myname = 'Piotr Klubiński';
  mytitle = 'Software Engineer in Test';
  myLocation = 'Gliwice, Poland';
  myEmail = 'pklubinski@gmail.com';
  myPhone = '+48 513 944 224';
  github = 'https://github.com/klubi';
  linkedin = 'https://www.linkedin.com/in/piotrklubinski/';
  stackoverflow = 'https://stackoverflow.com/users/2838206/klubi?tab=profile';
  techs = [
    {'name': 'Quality Assurance', 'level': 5},
    {'name': 'Automation', 'level': 4},
    {'name': 'Java', 'level': 4},
    {'name': 'Selenium', 'level': 4},
    {'name': 'REST', 'level': 4},
    {'name': 'SQL', 'level': 3},
    {'name': 'AWS', 'level': 3}
  ];
  languages = [
    {'language': 'Polish', 'level': 'Native'},
    {'language': 'English', 'level': 'C1'}
  ];
  experience = [
    {
      'title': 'Test Engineer',
      'company': 'ista Shared Service',
      'dates': 'Mar 2011 - Oct 2012',
      'description': 'I was mainly focused on preparing automated tests of invoice issuing service. ' +
      'Tests were covering UI as well as transactions which were the heart of the system. ' +
      'Tests were prepared using HP UFT (formerly HP QTP).'
    },
    {
      'title': 'Test Engineer / QA Supervisor',
      'company': 'Kroll Ontrack',
      'dates': 'Nov 2012 - Nov 2015',
      'description': 'During my work for Kroll Ontrack I was preparing automated tests for two projects, ' +
      'cloud based (Amazon Web Services) platform for processing ediscovery data, and Legal Technology platform. ' +
      'Testing of cloud based project was done mainly with SoapUI with lots of groovy code. ' +
      'Ediscovery platform was tested using C# framework wrapped around Selenium.'
    },
    {
      'title': 'Software Engineer in Test',
      'company': 'Jamf',
      'dates': 'Nov 2015 - Present',
      'description': 'For JamfPRO I\'ve been implementing automated tests using custom Java framework wrapped around ' +
      'Selenium. I was also working on extending framework functionality which apart from Selenium and UI testing ' +
      'included VNC library and custom Database communication library. ' +
      'For JamfNow I\'m working on set of tools which allow to test whole MDM platform. This includes Java framework ' +
      'wrapped around Selenium, Java framework for REST tests, Postman REST tests, custom JMeter listeners for ' +
      'performance tests, other tools and scripts that allow for more targeted exploratory testing.'
    }
  ];
  courses = [
    {
      'name': 'ISTQB Certified Tester, Foundation Level',
      'organizer': 'gasq.org / 21CN',
      'date': 'March 2011 / February 2013'
    },
    {
      'name': 'Testerrors, profession with the future',
      'organizer': 'netizens.pl',
      'date': 'November 2012 - April 2013'
    },
    {
      'name': 'Professional Scrum Master I',
      'organizer': 'Brass Willow',
      'date': 'December 2013'
    },
    {
      'name': 'Professional Scrum Developer',
      'organizer': 'Brass Willow',
      'date': '2015'
    }
  ];
  afterHours = [
    {
      'name': 'Cloudyna',
      'role': 'Co-founder',
      'url': 'http://cloudyna.org',
      'description': 'Cloud Computing focused conference, founded in 2014.'
    },
    {
      'name': 'AWS User Group Poland',
      'role': 'Co-founder',
      'url': 'http://awsug.pl',
      'description': 'Cloud Computing focused User Group, founded in 2014.'
    },
    {
      'name': 'Software Craftsmanship Silesia',
      'role': 'Host',
      'url': 'http://facebook.com/SoftwareCraftsmanshipSilesia',
      'description': 'Meetup dedicated to software development.'
    }
  ];
}

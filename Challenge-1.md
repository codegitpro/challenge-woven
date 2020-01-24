Investigate the bug
Background
A few months ago, your team released a feature to pull in some social media profile information when a new user is added to the system. An email is provided to a third-party library, which then pulls down some basic information from Facebook, Twitter, LinkedIn, Instagram, Pinterest, and Snapchat.
You come into work one morning and check your email and see the following message from Casey, a senior software engineer on your team:
Hey, something might be up with the social media integration... Do you have any time to take a look at this today? Just want to make sure it's not too big of an issue. Here's a [link] to the bug report. Thank you!
You open the bug report link:
Ticket #9584
Can't create new users
Reported by
Tamara Jones (Customer Support)
Description
One of our customers said they're having some issues when they try to create new users. It seems like they are able to get through most of the process, but then when they press the create button, they get an error. I did a screen share with them and it looks like they are getting a 500 error if that helps.
I've gotten a couple other error reports this morning. The only link is that all of these customers have social media enrichment turned on. I have attached a screenshot below.
Any ideas on what is going on?
1:1
Casey was able to narrow the bug down to one area of code, and even provided some test cases for you to work with to get started. The two accounts in TestSomeUsersThatWork are working as expected and saving successfully. The three accounts in TestSomeUsersThatFail should be saving, but they are not, which is why they incorrectly return false right now.
Instructions
Debug the issue
The data is being stored in a PostgreSQL database. You do not have the time or system access needed to fix this bug, but you can make progress and recommend a fix.
Document what you learned
Whether or not you have identified the issue, stop after 25 minutes and spend 5-10 minutes documenting what you've learned. Share everything you found – stack traces, error messages, workarounds, links to blog posts or Stack Overflow answers, what you've tried so far, recommended next steps, etc – that might help another engineer continue debugging the issue. (Who knows, that other engineer might be Future You™!)
Enter your response in the "Your Notes" tab (in the upper-right quadrant). You will write two responses:
An email back to Casey with any technical details on what the issue is or how to solve it
A comment on the support ticket to give Tamara the information she needs to help the customer make progress.
Here's a template you should use for your response:
**From**: You
**To**: Casey (senior engineer teammate)
**Subject**: re: User creation error
{replace with your email to Casey}
----
**Ticket #9584 Comment** to Tamara (customer support colleague)
{replace with your comment to Tamara}
Notes
We're more interested in your research and communication skills than whether you can solve the issue on this one. This is one of the main ways that we learn about your problem solving abilities, so err on the side of overcommunicating. Even if you were able to solve the problem, let us know how you got there. This issue or a similar one may come up again and your debugging approach could save someone hours of frustration.
If you do make any code changes, please leave them in. We will not evaluate whether the tests pass or you address the issue – we just want to see what you tried.
Tests and submitting
The provided automated tests are for your feedback. We will not evaluate whether the automated tests pass and you are not required to fix the issue to get full credit.
If you try to submit and get any of the following, we got your results and you can still proceed with the rest of the work simulation:
an error saying the tests do not pass
completion percentage < 100
see a red X symbol

Time guidance
Aim to take between 25-35 minutes total for this challenge. Set a timer now for 25 minutes to gauge the time you have spent on this challenge.
If you have spent 25 or more minutes:
Stop debugging
Set another timer for 10 minutes
Document everything you learned about the bug
If you have spent 35 or more minutes total:
Wrap up your response
Go on to the next challenge. It is independent from any solution you got on this challenge.
You can return to any incomplete challenges if you have time left over at the end.
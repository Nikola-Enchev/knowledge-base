
### Understanding what is behind the estimate

Effort:
- Meaning: Amount of work that needs to be done
- Measured in: Minimal, Low, Moderate, High

Complexity:
- Meaning: Technical and conceptual challenger inherent in the task. How complicated the work is.
- Measured in: Minimal, Low, Moderate, High

Risk :
- Meaning: Unclear Demand, Uncertainty, Dependence on 3rd party
- Currently we try to eliminate the `Risk` by creating task for research prior to task estimation
-  Measured in: Minimal, Low, Moderate, High

### Estimations
## 0:

| Estimate | Effort | Complexity |
| ---- | ---- | ---- |
| 0 | Minimal | Minimal |

Theme: Do a very small change on already existing functionality

Examples:
Change a translation text somewhere in the app.
- Change some modal's text description

Change a small part of a component's styling.
- Fix small misalignment
- Fix Color

Replace one icon with another.
Adjust existing form validation for a particular field.
## 1:

| Estimate | Effort | Complexity |
| ---- | ---- | ---- |
| 1 | Low | Low |

Examples:
Re-style an existing component.
- not a ground-up refactoring of the styles
- also not a minor colour update

Add existing component in another existing component.
- without any changes needed in the child component.
- with small changes needed in the parent component

Execute a BE request(Create/Update for example) for something and update the layout accordingly.
- create request method, connect layout with method
- update layout on success
- perform action on fail

## 2:

| Estimate | Effort | Complexity | 
|------|-----------|------------| 
| 2 | Moderate | Low | 
| 2 | Low | Moderate |

Examples:
Adding pagination to an existing data table. This requires integrating with backend pagination APIs and updating the frontend to handle page changes.
- ui elements
- request change
- initial request logic

## 3:

| Estimate | Effort | Complexity |
| ---- | ---- | ---- |
| 3 | Moderate | Moderate |
| 3 | High | Low |
| 3 | Low | High |

Examples:
Integrating a third-party API to display a dynamic map with custom markers, requiring API key setup and basic error handling.
Implementing a custom directive to automatically format input fields for currency, including dynamic localisation based on user settings.

## 5:

| Estimate | Effort | Complexity |
| ---- | ---- | ---- |
| 5 | High | High |
| 5 | High | Moderate |
| 5 | Moderate | High |

Tasks that are estimated at 5 and above often benefit from being broken down into smaller tasks, here is why:
- Improved accuracy in estimation
- Enhanced focus and manageability of team members
- Increased flexibility
- Faster feedback cycles
- Risk mitigation is better with smaller tasks
- Better resource allocation

----
#### Additional:

Effort meaning:
- Refers to the amount of work, time, and resources required to complete a task or project. It encompasses the volume of tasks, including coding, integration, testing, and documentation, as well as the scope of work needed to implement a feature or fix.

Effort measurement:

- **Minimal:** Tasks that require very little time and resources to complete. These are often quick fixes or adjustments that do not significantly alter the functionality or structure of the application.

- **Low:** Tasks that are relatively easy to complete and require a small amount of time and resources. These tasks are straightforward but might need a bit more work than minimal effort tasks.

- **Moderate:** Tasks that involve a considerable amount of work and may require coordination among team members. These tasks are more involved and may include developing new functionalities or making significant enhancements to existing features.

- **High:** Tasks that require a significant investment of time, resources, and possibly cross-team collaboration. High-effort tasks often involve complex features or substantial modifications to the application that impact multiple areas.


Complexity meaning:
- Refers to the technical difficulty and the conceptual challenges inherent in a task. It involves the intricacy of problems to be solved, the novelty of the solution to the team, and the degree of innovation required.

Complexity measurements meanings:
- **Minimal:** Tasks that are straightforward and require basic problem-solving skills. These tasks typically involve well-understood problems with clear, predefined solutions.

- **Low:** Tasks that involve a little more complexity, possibly requiring some research but largely within the team's existing knowledge base.

- **Moderate:** Tasks that require a moderate level of problem-solving, involving multiple areas of the application or requiring the team to learn new skills or technologies.

- **High:** Tasks that are highly complex, involving significant challenges that may be new to the team. These tasks often require innovative solutions and extensive problem-solving across various domains of the project.



Effort examples
- Low - adding a field to an existing form and adding validations
- Moderate - Creating a component (table if contents for examples) that is part of another component and has business logic to send data to BE
- High - Creating a new feature that affects multiple parts of the application, and requires creation of subcomponents or a lot of requests

Risk examples:
Uncertainty:
- Not knowing if there is a tool/library that can help is meet the requirements of the story
- Not knowing what functionalities/api a given tool that has to be used
External dependencies:
- Depending on third-party libraries introduces risk, especially if their capability are unclear
Technical difficulty:
- Implementing a not trivial component


If a 2 tasks are related and/or repetitive, this might reduce the combined effort for completing both tasks. (One of the estimates for the task might be lowered.)

Mistakes while estimating:
Translating story points to hours


----
### Resources

Tables idea:
https://www.linkedin.com/pulse/cheat-sheet-story-point-sizing-neeraj-bachani/
https://teamhood.com/agile/story-point-estimation-table/
https://medium.com/@rutvikbhatt/agile-estimation-demystifying-story-points-in-most-easiest-way-95231782e97f
General:
https://www.wechange.company/wp-content/uploads/2020/06/Story-points.pdf
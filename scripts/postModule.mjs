// Poster
import { createIssue } from "../.github/issues/createIssue.mjs";

// Helpers
import { getAssignees } from "../.github/issues/assignees.mjs";
import { getLabel } from "../.github/issues/labels.mjs";
import { getMilestoneId } from "../.github/issues/milestones.mjs";

// Modules
// import { prework } from "../content/meta/prework.mjs";
import { htmlCSS } from "../content/meta/html-css.mjs";

const issues = htmlCSS;
const assignees = ["wfercanas"];

try {
  const checkedAssignees = getAssignees(assignees);

  checkedAssignees.forEach((assignee, assignee_index) => {
    issues.forEach(({ title, body, labels, milestone }, issue_index) => {
      createIssue({
        title,
        body,
        labels: getLabel(labels),
        milestone: getMilestoneId(milestone),
        assignees: [assignee],
        delay: 120000 * Math.floor(issue_index / 20) * (assignee_index + 1),
      });
    });
  });
} catch (err) {
  console.error(err);
}

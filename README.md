# test-fresher-frontend-bees
# Test 1: Logic Test

reference materials: stackoverflow how to use promise in ts
 First, I check if the input is an array of numbers:

If it’s not an array, or if the array contains any element that is not a number, I will return an error: "Invalid input: Expected an array of numbers."

Second, I calculate the total length of the array. Then, I loop through the array. This function is asynchronous, so I use a promise. Once the promise resolves, I use setTimeout to introduce a delay. After the delay, I log the process and pass the delay time to the processWithDelay function. During each iteration, I calculate the progress percentage.

For the progress percentage:

The formula I use is (i + 1) / (total length of array) * 100.

Why (i + 1)?
Example with [1, 2, 3, 4, 5]
Since arrays are zero-indexed, i starts at 0 for the first element. To reflect a 1-based progress system (starting from 20% for the first element), you add 1 to i before calculating the progress. Without this, your progress calculation would show 0% for the first element and increase incorrectly.

For the first element (i = 0), the progress is ((0 + 1) / 5) * 100 = 20%.

For the second element (i = 1), the progress is ((1 + 1) / 5) * 100 = 40%.

For the third element (i = 2), the progress is ((2 + 1) / 5) * 100 = 60%.

For the fourth element (i = 3), the progress is ((3 + 1) / 5) * 100 = 80%.

For the fifth element (i = 4), the progress is ((4 + 1) / 5) * 100 = 100%.



# Test 2 App Development Test:
 reference materials: https://www.ag-grid.com/react-table/
I referred to/consulted the dragScroll from ChatGPT
Overview

The RenderTable component is a user table that fetches and displays user data with various functionalities, including sorting, filtering, and pagination. It is built using React and TypeScript.

Features

Data Fetching: Retrieves user data via the useFetchData custom hook.

Sorting: Allows sorting users by balance in ascending or descending order.

Filtering: Provides a checkbox-based filter for active and inactive users.

Pagination: Enables navigation between multiple pages of users.

Dynamic Rows Per Page: Users can select how many rows to display per page.

Loading State: Displays a spinner while fetching data.

Implementation Details

Data Fetching

The component utilizes the useFetchData hook to fetch user data and maintain the state.

Pagination

Pagination is handled using state variables to determine which users should be displayed on the current page.

Sorting by Balance

Users can sort by balance in ascending or descending order. The sorting order toggles on each click.

Filtering by Status

Users can filter the list based on their active status using checkboxes.

UI Components

Spinner: Displays a loading state while fetching data.

TableItem: Renders individual user rows.

MySelect: Dropdown for selecting rows per page.

Pagination: Handles pagination navigation.

StatusDropdown: Controls the filtering of active/inactive users.

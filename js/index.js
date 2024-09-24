fetch('../states.json')
        .then(res => res.json())
        .then(data => {
            function populateStatesDropdown() {
                const select = document.getElementById("validationCustom04");
                data.forEach(state => {
                    const option = document.createElement("option");
                    option.value = state.abbreviation;
                    option.textContent = state.name;
                    select.appendChild(option);
                });
            }
            populateStatesDropdown();
});
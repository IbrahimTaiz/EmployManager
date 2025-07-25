     // create emp1 object
      employee1 = {
        fullName: "Ibrahim Ali Esmail Alamri",
        monthlySalary: 3000,
        department: {
          main: "Computer Scince",
          sup: "Frontend Developer",
        },
        calculateAnnualSalary: function () {
          return this.monthlySalary * 12;
        },
      };

      // create emp2 object
      employee2 = {
        fullName: "Haifa",
        monthlySalary: 1800,
        department: {
          main: "HR",
          sup: "Assistent",
        },
        calculateAnnualSalary: function () {
          return this.monthlySalary * 12;
        },
      };

      // decleared add bonus function
      function addBonus(bonusPercentage) {
        var total =
          this.calculateAnnualSalary() * (bonusPercentage / 100) +
          this.calculateAnnualSalary();
        return total;
      }

      // decleared add bonus and tip function
      function addBonusAndTip(bonusPercentage, tip) {
        var bonus = this.calculateAnnualSalary() * (bonusPercentage / 100);
        var total = bonus + this.calculateAnnualSalary();
        return total + tip;
      }

      function print() {
        console.log(
          "Employee: " +
            this.fullName +
            " work in department of: " +
            this.department.main +
            " as a " +
            this.department.sup
        );
        console.log(
          "Have a salary of:" + this.monthlySalary,
          "and Annual Salary with Bonus:",
          addBonus.call(employee1, 10) // used call
        );
      }

      // used bind
      var e1 = print.bind(employee1);
      e1();

      // destructuring object
      let {
        fullName,
        monthlySalary,
        department: { main, sup },
      } = employee2;


      console.log(
        "Employee: " +
          fullName +
          " work in department of: " +
          main +
          " as a " +
          sup
      );
      console.log(
        "Have a salary of:" +
          monthlySalary +
          " and Annual Salary with Bonus:" +
          addBonusAndTip.apply(employee2, [30, 200]) // used apply
      );
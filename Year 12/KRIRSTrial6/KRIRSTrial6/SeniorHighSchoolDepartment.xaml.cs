/**
 * Sarmiento, Chyna Ezra S.
 * March 2019
 * Key Result Indicators Report Software
 * High School Thesis
 */

using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows;
using System.Windows.Controls;
using System.Windows.Data;
using System.Windows.Documents;
using System.Windows.Input;
using System.Windows.Media;
using System.Windows.Media.Imaging;
using System.Windows.Navigation;
using System.Windows.Shapes;

namespace KRIRSTrial6
{
    /// <summary>
    /// Interaction logic for MainWindow.xaml
    /// </summary>
    
    public partial class SeniorHighSchoolDepartment : Window
    {
        public SeniorHighSchoolDepartment()
        {
            InitializeComponent();
        }

        private void btnGrade12(object sender, RoutedEventArgs e)
        {
            new Grade12().Show();
        }
    }
}

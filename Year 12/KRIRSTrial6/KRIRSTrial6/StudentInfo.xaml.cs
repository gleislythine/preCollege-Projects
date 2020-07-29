using System;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using System.Data.Linq;
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
using System.Windows.Shapes;

namespace KRIRSTrial6
{
    /// <summary>
    /// Interaction logic for StudentInfo.xaml
    /// </summary>
    public partial class StudentInfo : Window
    {
        ViolationsPageDataContext dc = new ViolationsPageDataContext(Properties.Settings.Default.KRIRSTrial1ConnectionString);

        public StudentInfo()
        {
            InitializeComponent();

            if (dc.DatabaseExists())
            {
                dgs180195.ItemsSource = dc.vwStudentViolationInformations;
            }
        }

        private void InsertViolation(string StudentID, int ViolationID, string ViolationComment)
        {
            string server = "SNEIDELAIRE\\SQLEXPRESS;";
            string database = "KRIRSTrial1;";
            string userID = "ChynaSarmiento;";
            string pass = "e49oqg76;";
            SqlConnection conn = new SqlConnection(@"Server="+server+" Database="+database+" User Id="+userID+" Password="+pass);
            SqlCommand cmdInst = new SqlCommand("exec uspInsertViolation '" + StudentID + "', " + ViolationID + ", '" + ViolationComment + "'", conn);
            conn.Open();
            cmdInst.CommandType = CommandType.Text;
            cmdInst.ExecuteNonQuery();
            MessageBox.Show("Done");


            if (dc.DatabaseExists())
            {
                dgs180195.ItemsSource = dc.vwStudentViolationInformations;
            }

        }

        private void btnBackG12STEMA(object sender, RoutedEventArgs e)
        {
            new g12initiative().Show();
        }

        private void AddEntryViolation_Click(object sender, RoutedEventArgs e)
        {
            if(cbViolationSelectors.SelectedIndex == 0)
            {
                AddEntryViolation.IsEnabled = false;
            }
            else
            {
                string violation = cbViolationSelectors.SelectedValue.ToString().Substring(31);
                string comments = tbComments.Text;

                if ((tbComments.Text == "Please add a violation in order to add a comment.") || tbComments.Text.Length == 0)
                {
                    MessageBox.Show(violation);
                    InsertViolation("18-0195", cbViolationSelectors.SelectedIndex, "");
                }
                else
                {
                    MessageBox.Show(violation + "\n\nComments:\n" + comments);
                    InsertViolation("18-0195", cbViolationSelectors.SelectedIndex, comments);
                }
            }
        }

        private void TbComments_GotFocus(object sender, RoutedEventArgs e)
        {
            tbComments.Text = "";
        }

        private void TbComments_TextChanged(object sender, TextChangedEventArgs e)
        {

        }
    }
}

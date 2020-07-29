using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Data.SqlClient;

namespace KRIRSTrial6
{
    class SQLConnection
    {
        private string _connStr;
        private SqlConnection _uConn;

        public SqlConnection UConn
        {
            get { return _uConn; }
            set { _uConn = value; }
        }

        public SQLConnection()
        {
            _connStr = "server = SNEIDELAIRE\\SQLEXPRESS; Database = KRIRSTrial1; user = ChynaSarmiento; password = e49oqg76;";
            _uConn = new SqlConnection(_connStr);
        }
    }
}

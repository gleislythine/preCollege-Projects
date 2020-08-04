/**
 *  Grade
 */

import java.util.Scanner;

public class C5ex5 {
    public static void main(String [] Args) {
    	Scanner input = new Scanner(System.in);
    		System.out.print("Enter the percentage: ");
    			int percent = input.nextInt();
    	input.close();
    	
    	String alphaEqui;
    	       if (percent <= 0 || percent > 100){ alphaEqui = "N";
    	} else if (percent <  60 ){ alphaEqui = "F";
    	} else if (percent <= 69 ){ alphaEqui = "D";
    	} else if (percent <= 79 ){ alphaEqui = "C";
    	} else if (percent <= 89 ){ alphaEqui = "B";
    	} else                    { alphaEqui = "A"; }
          
    	System.out.println("The corresponding letter grade is: " + alphaEqui);
    }
}
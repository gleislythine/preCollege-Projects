import java.util.Scanner;

public class C4ex2 {
    public static void main(String [] Args) {
    	
    	Scanner input    = new Scanner(System.in);
    		System.out.print("Enter the diameter of the pizza in inches: ");
    		int diameter = input.nextInt();
    	input.close();
    	
    	double labor	 = 0.75;
    	double rent		 = 1.00;
    	double materials = 0.05 * diameter * diameter;
    	
    	double cost 	 = labor + rent + materials;
    	System.out.println("The cost of making the pizza is: " + "$" + cost);
    }
}
import java.util.Scanner;

public class C4ex5 {
    public static void main(String [] Args) {
    	Scanner input = new Scanner(System.in);
    		System.out.print("Enter the mass in kilograms: ");
    		int mass  = input.nextInt();
    	input.close();
    	
    	final double lightspeed = 3 * Math.pow(10,8);
    	double energy  = mass * Math.pow(lightspeed, 2);
    	double oHwatts = energy / (3600 * 100);
    	System.out.println("The energy produced in Joules is = " + energy);
    	System.out.println("The number of 100-watt light bulbs powered = " + oHwatts);
    }
}
import java.util.Scanner;

public class Circle {
    public static void main(String [] Args) {
    	Scanner input = new Scanner(System.in);
    		System.out.print("Enter the radius: ");
    		double r = input.nextDouble();
    	input.close();
    	
    	double area = 3.14 * Math.pow(r, 2);
    	System.out.println("The area of the circle is: " + area);
    }
}
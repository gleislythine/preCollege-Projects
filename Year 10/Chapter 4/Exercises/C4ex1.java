import java.util.Scanner;

public class C4ex1 {
    public static void main(String [] Args) {
    	Scanner input  = new Scanner(System.in);
    		System.out.print("Enter a time less than 4.5 seconds: ");
    		int time   = input.nextInt();
    	input.close();
    	
    	double height  = 100 - 4.9 * Math.pow(time,2);
    	System.out.println("The height of the object is: " + height);
    }
}
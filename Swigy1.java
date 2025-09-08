class Swigy1 {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.println("Welcome to Swiggy!");
        System.out.println("Please enter your location:");
        String location = sc.nextLine();
        System.out.println("Searching for restaurants near " + location + "...");
        // Additional code for searching restaurants can be added here
        sc.close();
    }
}
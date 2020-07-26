package com.example.tenantmanagement;

import androidx.annotation.NonNull;
import androidx.appcompat.app.AppCompatActivity;
import androidx.appcompat.widget.AppCompatEditText;

import android.content.Intent;
import android.os.Bundle;
import android.util.Log;
import android.view.View;
import android.widget.Button;
import android.widget.EditText;
import android.widget.Toast;

import com.google.android.gms.tasks.OnCompleteListener;
import com.google.android.gms.tasks.Task;
import com.google.firebase.auth.AuthResult;
import com.google.firebase.auth.FirebaseAuth;

public class Signup_Activity extends AppCompatActivity {
    private AppCompatEditText etusername, etPassword, etConfirmPassword, etEmailid , etPhonenumber;
    private  String  str_userName,password, confirmPassword,emailid,phonenumber;
    private View view;
    Button btnregister;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_signup_);
        etusername = findViewById(R.id.username);
        etPassword= findViewById(R.id.password);
        etConfirmPassword= findViewById(R.id.etconfirmpassword);
        etEmailid=findViewById(R.id.etemailid);
        etPhonenumber=findViewById(R.id.etphonenumber);
        btnregister=findViewById(R.id.btnregister);

    }
    public  void  btnRegister(View view)
    {
        str_userName= etusername.getText().toString().trim();
        password = etPassword.getText().toString().trim();
        confirmPassword= etConfirmPassword.getText().toString().trim();
        emailid=etEmailid.getText().toString().trim();
        phonenumber=etPhonenumber.getText().toString().trim();

        Log.d("email",password +"\n"+confirmPassword +"\n"+emailid +"\n"+phonenumber);
        if(str_userName.equals(""))
        {
            etusername.setError("Enter Email");
        }
        else if(password.equals(""))
        {
            etPassword.setError("Enter Password");
        }
        else if (confirmPassword.equals(""))
        {
            etConfirmPassword.setError("Confirm Password");
        }
        else if (!confirmPassword.equals(password))
        {
            etConfirmPassword.setError("Confirm Password Correctly");
        }
        else if(emailid.equals(""))
        {
            etEmailid.setError("Enter Emailid");
        }
        else if(phonenumber.equals(""))
        {
            etPhonenumber.setError("Enter Phonenumber");
        }
        else {

            FirebaseAuth mAuth = FirebaseAuth.getInstance();
            mAuth.createUserWithEmailAndPassword(emailid, password)
                    .addOnCompleteListener(this, new OnCompleteListener<AuthResult>() {
                        @Override
                        public void onComplete(@NonNull Task<AuthResult> task) {
                            if (task.isSuccessful()) {
                                Toast.makeText(Signup_Activity.this,
                                        "User Created Successfully", Toast.LENGTH_SHORT).show();
                                startActivity(new Intent(Signup_Activity.this,
                                        MainActivity.class));
                                finish();
                            } else {
                                Toast.makeText(Signup_Activity.this,
                                        "Failed to create user :" + task.getException()
                                        , Toast.LENGTH_SHORT).show();

                            }


                        }
                    });


        }

    }
}
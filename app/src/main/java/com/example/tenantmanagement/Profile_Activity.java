package com.example.tenantmanagement;

import androidx.annotation.NonNull;
import androidx.annotation.Nullable;
import androidx.appcompat.app.AppCompatActivity;
import androidx.core.app.ActivityCompat;

import android.Manifest;
import android.app.ProgressDialog;
import android.content.Intent;
import android.net.Uri;
import android.os.Bundle;
import android.provider.MediaStore;
import android.view.View;
import android.widget.EditText;
import android.widget.ImageView;
import android.widget.Toast;

import com.bumptech.glide.Glide;
import com.google.android.gms.tasks.OnCompleteListener;
import com.google.android.gms.tasks.OnSuccessListener;
import com.google.android.gms.tasks.Task;
import com.google.firebase.auth.FirebaseAuth;
import com.google.firebase.auth.FirebaseUser;
import com.google.firebase.auth.UserProfileChangeRequest;
import com.google.firebase.storage.FirebaseStorage;
import com.google.firebase.storage.StorageReference;
import com.google.firebase.storage.UploadTask;

public class Profile_Activity extends AppCompatActivity {

    private EditText etName;
    private FirebaseAuth mAuth;
    private FirebaseUser user;
    private ImageView ivProfile;
    private StorageReference mRootStorage;

    Uri localFileUri, serverFileUri;
    ProgressDialog pd;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_profile_);
        ActivityCompat.requestPermissions(this, new String[]{Manifest.permission.READ_EXTERNAL_STORAGE}, 100);

        mRootStorage = FirebaseStorage.getInstance().getReference();
        etName = findViewById(R.id.etName);
        mAuth = FirebaseAuth.getInstance();
        ivProfile = findViewById(R.id.ivProfile);

        user = mAuth.getCurrentUser();


        if (user != null) {
            etName.setText(user.getDisplayName());

            Uri photoUri = user.getPhotoUrl();
            if (photoUri != null) {
                Glide.with(this)
                        .load(photoUri)
                        .placeholder(R.drawable.user)
                        .error(R.drawable.user)
                        .into(ivProfile);
            }
        }

    }

    private  void updateOnlyName(){
        UserProfileChangeRequest request = new UserProfileChangeRequest.Builder()
                .setDisplayName(etName.getText().toString())
                .build();

        user.updateProfile(request).addOnCompleteListener(this, new OnCompleteListener<Void>() {
            @Override
            public void onComplete(@NonNull Task<Void> task) {

                if(task.isSuccessful())
                {
                    Toast.makeText(Profile_Activity.this, "Profile Updated Sucessfully", Toast.LENGTH_SHORT).show();
                }
                else
                {
                    Toast.makeText(Profile_Activity.this, "Failed to update Profile :"
                            + task.getException(), Toast.LENGTH_SHORT).show();
                }
            }
        });

    }

    private  void updateNameAndPhoto()
    {



        String file_name = user.getUid() + ".jpg";
        final StorageReference fileRef = mRootStorage.child("images/"+ file_name);
        fileRef.putFile(localFileUri)
                .addOnSuccessListener(new OnSuccessListener<UploadTask.TaskSnapshot>() {
                    @Override
                    public void onSuccess(UploadTask.TaskSnapshot taskSnapshot) {

                        fileRef.getDownloadUrl().addOnSuccessListener(new OnSuccessListener<Uri>() {
                            @Override
                            public void onSuccess(Uri uri) {
                                serverFileUri = uri;

                                UserProfileChangeRequest request = new UserProfileChangeRequest.Builder()
                                        .setDisplayName(etName.getText().toString())
                                        .setPhotoUri(serverFileUri)
                                        .build();

                                user.updateProfile(request).addOnCompleteListener(new OnCompleteListener<Void>() {
                                    @Override
                                    public void onComplete(@NonNull Task<Void> task) {

                                        if(task.isSuccessful())
                                        {
                                            Toast.makeText(Profile_Activity.this, "Profile Updated Sucessfully", Toast.LENGTH_SHORT).show();
                                        }
                                        else
                                        {
                                            Toast.makeText(Profile_Activity.this, "Failed to update Profile :"
                                                    + task.getException(), Toast.LENGTH_SHORT).show();
                                        }
                                    }
                                });
                            }
                        });
                    }
                });


    }
    public  void btnSaveClick(View view)
    {
        try{
            if(etName.getText().toString().trim().equals(""))
            {
                etName.setError("Enter Name");
            }
            else
            {

                if(localFileUri!=null)
                {
                    updateNameAndPhoto();
                }
                else {
                    updateOnlyName();
                }
            }
        }catch (Exception e){
            e.printStackTrace();
        }

    }

    public void pickImage(View v)
    {
        Intent intent = new Intent(Intent.ACTION_PICK, MediaStore.Images.Media.EXTERNAL_CONTENT_URI);
        startActivityForResult(intent, 101);

    }

    @Override
    protected void onActivityResult(int requestCode, int resultCode, @Nullable Intent data) {
        super.onActivityResult(requestCode, resultCode, data);
        if(requestCode==101)
        {
            if(resultCode==RESULT_OK)
            {
                localFileUri= data.getData();
                ivProfile.setImageURI(localFileUri);
            }
        }
    }

    public  void btnLogoutClick(View view)
    {
        mAuth.signOut();
        startActivity(new Intent(this, MyLogin.class));
        finish();
    }


}
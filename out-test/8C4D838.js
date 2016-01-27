goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__31068__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__31068 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__31069__i = 0, G__31069__a = new Array(arguments.length -  0);
while (G__31069__i < G__31069__a.length) {G__31069__a[G__31069__i] = arguments[G__31069__i + 0]; ++G__31069__i;}
  args = new cljs.core.IndexedSeq(G__31069__a,0);
} 
return G__31068__delegate.call(this,args);};
G__31068.cljs$lang$maxFixedArity = 0;
G__31068.cljs$lang$applyTo = (function (arglist__31070){
var args = cljs.core.seq(arglist__31070);
return G__31068__delegate(args);
});
G__31068.cljs$core$IFn$_invoke$arity$variadic = G__31068__delegate;
return G__31068;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__31071__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__31071 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__31072__i = 0, G__31072__a = new Array(arguments.length -  0);
while (G__31072__i < G__31072__a.length) {G__31072__a[G__31072__i] = arguments[G__31072__i + 0]; ++G__31072__i;}
  args = new cljs.core.IndexedSeq(G__31072__a,0);
} 
return G__31071__delegate.call(this,args);};
G__31071.cljs$lang$maxFixedArity = 0;
G__31071.cljs$lang$applyTo = (function (arglist__31073){
var args = cljs.core.seq(arglist__31073);
return G__31071__delegate(args);
});
G__31071.cljs$core$IFn$_invoke$arity$variadic = G__31071__delegate;
return G__31071;
})()
;

return null;
});

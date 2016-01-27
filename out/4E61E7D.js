goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__332953__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__332953 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__332954__i = 0, G__332954__a = new Array(arguments.length -  0);
while (G__332954__i < G__332954__a.length) {G__332954__a[G__332954__i] = arguments[G__332954__i + 0]; ++G__332954__i;}
  args = new cljs.core.IndexedSeq(G__332954__a,0);
} 
return G__332953__delegate.call(this,args);};
G__332953.cljs$lang$maxFixedArity = 0;
G__332953.cljs$lang$applyTo = (function (arglist__332955){
var args = cljs.core.seq(arglist__332955);
return G__332953__delegate(args);
});
G__332953.cljs$core$IFn$_invoke$arity$variadic = G__332953__delegate;
return G__332953;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__332956__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__332956 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__332957__i = 0, G__332957__a = new Array(arguments.length -  0);
while (G__332957__i < G__332957__a.length) {G__332957__a[G__332957__i] = arguments[G__332957__i + 0]; ++G__332957__i;}
  args = new cljs.core.IndexedSeq(G__332957__a,0);
} 
return G__332956__delegate.call(this,args);};
G__332956.cljs$lang$maxFixedArity = 0;
G__332956.cljs$lang$applyTo = (function (arglist__332958){
var args = cljs.core.seq(arglist__332958);
return G__332956__delegate(args);
});
G__332956.cljs$core$IFn$_invoke$arity$variadic = G__332956__delegate;
return G__332956;
})()
;

return null;
});

goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__30968__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__30968 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__30969__i = 0, G__30969__a = new Array(arguments.length -  0);
while (G__30969__i < G__30969__a.length) {G__30969__a[G__30969__i] = arguments[G__30969__i + 0]; ++G__30969__i;}
  args = new cljs.core.IndexedSeq(G__30969__a,0);
} 
return G__30968__delegate.call(this,args);};
G__30968.cljs$lang$maxFixedArity = 0;
G__30968.cljs$lang$applyTo = (function (arglist__30970){
var args = cljs.core.seq(arglist__30970);
return G__30968__delegate(args);
});
G__30968.cljs$core$IFn$_invoke$arity$variadic = G__30968__delegate;
return G__30968;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__30971__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__30971 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__30972__i = 0, G__30972__a = new Array(arguments.length -  0);
while (G__30972__i < G__30972__a.length) {G__30972__a[G__30972__i] = arguments[G__30972__i + 0]; ++G__30972__i;}
  args = new cljs.core.IndexedSeq(G__30972__a,0);
} 
return G__30971__delegate.call(this,args);};
G__30971.cljs$lang$maxFixedArity = 0;
G__30971.cljs$lang$applyTo = (function (arglist__30973){
var args = cljs.core.seq(arglist__30973);
return G__30971__delegate(args);
});
G__30971.cljs$core$IFn$_invoke$arity$variadic = G__30971__delegate;
return G__30971;
})()
;

return null;
});

goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__19940__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__19940 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__19941__i = 0, G__19941__a = new Array(arguments.length -  0);
while (G__19941__i < G__19941__a.length) {G__19941__a[G__19941__i] = arguments[G__19941__i + 0]; ++G__19941__i;}
  args = new cljs.core.IndexedSeq(G__19941__a,0);
} 
return G__19940__delegate.call(this,args);};
G__19940.cljs$lang$maxFixedArity = 0;
G__19940.cljs$lang$applyTo = (function (arglist__19942){
var args = cljs.core.seq(arglist__19942);
return G__19940__delegate(args);
});
G__19940.cljs$core$IFn$_invoke$arity$variadic = G__19940__delegate;
return G__19940;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__19943__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__19943 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__19944__i = 0, G__19944__a = new Array(arguments.length -  0);
while (G__19944__i < G__19944__a.length) {G__19944__a[G__19944__i] = arguments[G__19944__i + 0]; ++G__19944__i;}
  args = new cljs.core.IndexedSeq(G__19944__a,0);
} 
return G__19943__delegate.call(this,args);};
G__19943.cljs$lang$maxFixedArity = 0;
G__19943.cljs$lang$applyTo = (function (arglist__19945){
var args = cljs.core.seq(arglist__19945);
return G__19943__delegate(args);
});
G__19943.cljs$core$IFn$_invoke$arity$variadic = G__19943__delegate;
return G__19943;
})()
;

return null;
});

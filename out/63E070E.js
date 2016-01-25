goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__109259__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__109259 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__109260__i = 0, G__109260__a = new Array(arguments.length -  0);
while (G__109260__i < G__109260__a.length) {G__109260__a[G__109260__i] = arguments[G__109260__i + 0]; ++G__109260__i;}
  args = new cljs.core.IndexedSeq(G__109260__a,0);
} 
return G__109259__delegate.call(this,args);};
G__109259.cljs$lang$maxFixedArity = 0;
G__109259.cljs$lang$applyTo = (function (arglist__109261){
var args = cljs.core.seq(arglist__109261);
return G__109259__delegate(args);
});
G__109259.cljs$core$IFn$_invoke$arity$variadic = G__109259__delegate;
return G__109259;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__109262__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__109262 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__109263__i = 0, G__109263__a = new Array(arguments.length -  0);
while (G__109263__i < G__109263__a.length) {G__109263__a[G__109263__i] = arguments[G__109263__i + 0]; ++G__109263__i;}
  args = new cljs.core.IndexedSeq(G__109263__a,0);
} 
return G__109262__delegate.call(this,args);};
G__109262.cljs$lang$maxFixedArity = 0;
G__109262.cljs$lang$applyTo = (function (arglist__109264){
var args = cljs.core.seq(arglist__109264);
return G__109262__delegate(args);
});
G__109262.cljs$core$IFn$_invoke$arity$variadic = G__109262__delegate;
return G__109262;
})()
;

return null;
});

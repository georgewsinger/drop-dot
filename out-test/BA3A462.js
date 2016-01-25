goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__53982__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__53982 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__53983__i = 0, G__53983__a = new Array(arguments.length -  0);
while (G__53983__i < G__53983__a.length) {G__53983__a[G__53983__i] = arguments[G__53983__i + 0]; ++G__53983__i;}
  args = new cljs.core.IndexedSeq(G__53983__a,0);
} 
return G__53982__delegate.call(this,args);};
G__53982.cljs$lang$maxFixedArity = 0;
G__53982.cljs$lang$applyTo = (function (arglist__53984){
var args = cljs.core.seq(arglist__53984);
return G__53982__delegate(args);
});
G__53982.cljs$core$IFn$_invoke$arity$variadic = G__53982__delegate;
return G__53982;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__53985__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__53985 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__53986__i = 0, G__53986__a = new Array(arguments.length -  0);
while (G__53986__i < G__53986__a.length) {G__53986__a[G__53986__i] = arguments[G__53986__i + 0]; ++G__53986__i;}
  args = new cljs.core.IndexedSeq(G__53986__a,0);
} 
return G__53985__delegate.call(this,args);};
G__53985.cljs$lang$maxFixedArity = 0;
G__53985.cljs$lang$applyTo = (function (arglist__53987){
var args = cljs.core.seq(arglist__53987);
return G__53985__delegate(args);
});
G__53985.cljs$core$IFn$_invoke$arity$variadic = G__53985__delegate;
return G__53985;
})()
;

return null;
});

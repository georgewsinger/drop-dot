goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__53025__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__53025 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__53026__i = 0, G__53026__a = new Array(arguments.length -  0);
while (G__53026__i < G__53026__a.length) {G__53026__a[G__53026__i] = arguments[G__53026__i + 0]; ++G__53026__i;}
  args = new cljs.core.IndexedSeq(G__53026__a,0);
} 
return G__53025__delegate.call(this,args);};
G__53025.cljs$lang$maxFixedArity = 0;
G__53025.cljs$lang$applyTo = (function (arglist__53027){
var args = cljs.core.seq(arglist__53027);
return G__53025__delegate(args);
});
G__53025.cljs$core$IFn$_invoke$arity$variadic = G__53025__delegate;
return G__53025;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__53028__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__53028 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__53029__i = 0, G__53029__a = new Array(arguments.length -  0);
while (G__53029__i < G__53029__a.length) {G__53029__a[G__53029__i] = arguments[G__53029__i + 0]; ++G__53029__i;}
  args = new cljs.core.IndexedSeq(G__53029__a,0);
} 
return G__53028__delegate.call(this,args);};
G__53028.cljs$lang$maxFixedArity = 0;
G__53028.cljs$lang$applyTo = (function (arglist__53030){
var args = cljs.core.seq(arglist__53030);
return G__53028__delegate(args);
});
G__53028.cljs$core$IFn$_invoke$arity$variadic = G__53028__delegate;
return G__53028;
})()
;

return null;
});

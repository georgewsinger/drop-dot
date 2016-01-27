goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__347262__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__347262 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__347263__i = 0, G__347263__a = new Array(arguments.length -  0);
while (G__347263__i < G__347263__a.length) {G__347263__a[G__347263__i] = arguments[G__347263__i + 0]; ++G__347263__i;}
  args = new cljs.core.IndexedSeq(G__347263__a,0);
} 
return G__347262__delegate.call(this,args);};
G__347262.cljs$lang$maxFixedArity = 0;
G__347262.cljs$lang$applyTo = (function (arglist__347264){
var args = cljs.core.seq(arglist__347264);
return G__347262__delegate(args);
});
G__347262.cljs$core$IFn$_invoke$arity$variadic = G__347262__delegate;
return G__347262;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__347265__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__347265 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__347266__i = 0, G__347266__a = new Array(arguments.length -  0);
while (G__347266__i < G__347266__a.length) {G__347266__a[G__347266__i] = arguments[G__347266__i + 0]; ++G__347266__i;}
  args = new cljs.core.IndexedSeq(G__347266__a,0);
} 
return G__347265__delegate.call(this,args);};
G__347265.cljs$lang$maxFixedArity = 0;
G__347265.cljs$lang$applyTo = (function (arglist__347267){
var args = cljs.core.seq(arglist__347267);
return G__347265__delegate(args);
});
G__347265.cljs$core$IFn$_invoke$arity$variadic = G__347265__delegate;
return G__347265;
})()
;

return null;
});

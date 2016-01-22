goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__25980__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__25980 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__25981__i = 0, G__25981__a = new Array(arguments.length -  0);
while (G__25981__i < G__25981__a.length) {G__25981__a[G__25981__i] = arguments[G__25981__i + 0]; ++G__25981__i;}
  args = new cljs.core.IndexedSeq(G__25981__a,0);
} 
return G__25980__delegate.call(this,args);};
G__25980.cljs$lang$maxFixedArity = 0;
G__25980.cljs$lang$applyTo = (function (arglist__25982){
var args = cljs.core.seq(arglist__25982);
return G__25980__delegate(args);
});
G__25980.cljs$core$IFn$_invoke$arity$variadic = G__25980__delegate;
return G__25980;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__25983__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__25983 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__25984__i = 0, G__25984__a = new Array(arguments.length -  0);
while (G__25984__i < G__25984__a.length) {G__25984__a[G__25984__i] = arguments[G__25984__i + 0]; ++G__25984__i;}
  args = new cljs.core.IndexedSeq(G__25984__a,0);
} 
return G__25983__delegate.call(this,args);};
G__25983.cljs$lang$maxFixedArity = 0;
G__25983.cljs$lang$applyTo = (function (arglist__25985){
var args = cljs.core.seq(arglist__25985);
return G__25983__delegate(args);
});
G__25983.cljs$core$IFn$_invoke$arity$variadic = G__25983__delegate;
return G__25983;
})()
;

return null;
});

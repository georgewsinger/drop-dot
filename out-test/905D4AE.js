goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__65797__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__65797 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__65798__i = 0, G__65798__a = new Array(arguments.length -  0);
while (G__65798__i < G__65798__a.length) {G__65798__a[G__65798__i] = arguments[G__65798__i + 0]; ++G__65798__i;}
  args = new cljs.core.IndexedSeq(G__65798__a,0);
} 
return G__65797__delegate.call(this,args);};
G__65797.cljs$lang$maxFixedArity = 0;
G__65797.cljs$lang$applyTo = (function (arglist__65799){
var args = cljs.core.seq(arglist__65799);
return G__65797__delegate(args);
});
G__65797.cljs$core$IFn$_invoke$arity$variadic = G__65797__delegate;
return G__65797;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__65800__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__65800 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__65801__i = 0, G__65801__a = new Array(arguments.length -  0);
while (G__65801__i < G__65801__a.length) {G__65801__a[G__65801__i] = arguments[G__65801__i + 0]; ++G__65801__i;}
  args = new cljs.core.IndexedSeq(G__65801__a,0);
} 
return G__65800__delegate.call(this,args);};
G__65800.cljs$lang$maxFixedArity = 0;
G__65800.cljs$lang$applyTo = (function (arglist__65802){
var args = cljs.core.seq(arglist__65802);
return G__65800__delegate(args);
});
G__65800.cljs$core$IFn$_invoke$arity$variadic = G__65800__delegate;
return G__65800;
})()
;

return null;
});

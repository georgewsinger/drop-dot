goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__250021__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__250021 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__250022__i = 0, G__250022__a = new Array(arguments.length -  0);
while (G__250022__i < G__250022__a.length) {G__250022__a[G__250022__i] = arguments[G__250022__i + 0]; ++G__250022__i;}
  args = new cljs.core.IndexedSeq(G__250022__a,0);
} 
return G__250021__delegate.call(this,args);};
G__250021.cljs$lang$maxFixedArity = 0;
G__250021.cljs$lang$applyTo = (function (arglist__250023){
var args = cljs.core.seq(arglist__250023);
return G__250021__delegate(args);
});
G__250021.cljs$core$IFn$_invoke$arity$variadic = G__250021__delegate;
return G__250021;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__250024__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__250024 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__250025__i = 0, G__250025__a = new Array(arguments.length -  0);
while (G__250025__i < G__250025__a.length) {G__250025__a[G__250025__i] = arguments[G__250025__i + 0]; ++G__250025__i;}
  args = new cljs.core.IndexedSeq(G__250025__a,0);
} 
return G__250024__delegate.call(this,args);};
G__250024.cljs$lang$maxFixedArity = 0;
G__250024.cljs$lang$applyTo = (function (arglist__250026){
var args = cljs.core.seq(arglist__250026);
return G__250024__delegate(args);
});
G__250024.cljs$core$IFn$_invoke$arity$variadic = G__250024__delegate;
return G__250024;
})()
;

return null;
});

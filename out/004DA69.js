goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__22011__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__22011 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__22012__i = 0, G__22012__a = new Array(arguments.length -  0);
while (G__22012__i < G__22012__a.length) {G__22012__a[G__22012__i] = arguments[G__22012__i + 0]; ++G__22012__i;}
  args = new cljs.core.IndexedSeq(G__22012__a,0);
} 
return G__22011__delegate.call(this,args);};
G__22011.cljs$lang$maxFixedArity = 0;
G__22011.cljs$lang$applyTo = (function (arglist__22013){
var args = cljs.core.seq(arglist__22013);
return G__22011__delegate(args);
});
G__22011.cljs$core$IFn$_invoke$arity$variadic = G__22011__delegate;
return G__22011;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__22014__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__22014 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__22015__i = 0, G__22015__a = new Array(arguments.length -  0);
while (G__22015__i < G__22015__a.length) {G__22015__a[G__22015__i] = arguments[G__22015__i + 0]; ++G__22015__i;}
  args = new cljs.core.IndexedSeq(G__22015__a,0);
} 
return G__22014__delegate.call(this,args);};
G__22014.cljs$lang$maxFixedArity = 0;
G__22014.cljs$lang$applyTo = (function (arglist__22016){
var args = cljs.core.seq(arglist__22016);
return G__22014__delegate(args);
});
G__22014.cljs$core$IFn$_invoke$arity$variadic = G__22014__delegate;
return G__22014;
})()
;

return null;
});

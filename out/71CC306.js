goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__22777__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__22777 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__22778__i = 0, G__22778__a = new Array(arguments.length -  0);
while (G__22778__i < G__22778__a.length) {G__22778__a[G__22778__i] = arguments[G__22778__i + 0]; ++G__22778__i;}
  args = new cljs.core.IndexedSeq(G__22778__a,0);
} 
return G__22777__delegate.call(this,args);};
G__22777.cljs$lang$maxFixedArity = 0;
G__22777.cljs$lang$applyTo = (function (arglist__22779){
var args = cljs.core.seq(arglist__22779);
return G__22777__delegate(args);
});
G__22777.cljs$core$IFn$_invoke$arity$variadic = G__22777__delegate;
return G__22777;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__22780__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__22780 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__22781__i = 0, G__22781__a = new Array(arguments.length -  0);
while (G__22781__i < G__22781__a.length) {G__22781__a[G__22781__i] = arguments[G__22781__i + 0]; ++G__22781__i;}
  args = new cljs.core.IndexedSeq(G__22781__a,0);
} 
return G__22780__delegate.call(this,args);};
G__22780.cljs$lang$maxFixedArity = 0;
G__22780.cljs$lang$applyTo = (function (arglist__22782){
var args = cljs.core.seq(arglist__22782);
return G__22780__delegate(args);
});
G__22780.cljs$core$IFn$_invoke$arity$variadic = G__22780__delegate;
return G__22780;
})()
;

return null;
});

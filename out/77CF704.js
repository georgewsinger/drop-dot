goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__109270__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__109270 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__109271__i = 0, G__109271__a = new Array(arguments.length -  0);
while (G__109271__i < G__109271__a.length) {G__109271__a[G__109271__i] = arguments[G__109271__i + 0]; ++G__109271__i;}
  args = new cljs.core.IndexedSeq(G__109271__a,0);
} 
return G__109270__delegate.call(this,args);};
G__109270.cljs$lang$maxFixedArity = 0;
G__109270.cljs$lang$applyTo = (function (arglist__109272){
var args = cljs.core.seq(arglist__109272);
return G__109270__delegate(args);
});
G__109270.cljs$core$IFn$_invoke$arity$variadic = G__109270__delegate;
return G__109270;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__109273__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__109273 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__109274__i = 0, G__109274__a = new Array(arguments.length -  0);
while (G__109274__i < G__109274__a.length) {G__109274__a[G__109274__i] = arguments[G__109274__i + 0]; ++G__109274__i;}
  args = new cljs.core.IndexedSeq(G__109274__a,0);
} 
return G__109273__delegate.call(this,args);};
G__109273.cljs$lang$maxFixedArity = 0;
G__109273.cljs$lang$applyTo = (function (arglist__109275){
var args = cljs.core.seq(arglist__109275);
return G__109273__delegate(args);
});
G__109273.cljs$core$IFn$_invoke$arity$variadic = G__109273__delegate;
return G__109273;
})()
;

return null;
});
